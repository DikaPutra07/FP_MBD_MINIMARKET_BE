------------------------------------------------------------------
-- Active Database : Menghitung Total Transaksi Penjualan Per Transaksi ID
------------------------------------------------------------------

-- VIEW : Akumulasi Transaksi Penjualan per Transaksi ID

DROP VIEW IF EXISTS harga_transaksi_penjualan;
CREATE VIEW harga_transaksi_penjualan AS
SELECT t.id AS transaksi_id, SUM(b.harga * bt.jumlah_barang) AS total_penjualan
FROM "Transaksi_Penjualans" t
JOIN "Barang_Transaksi_Penjualans" bt ON t.id = bt.transaksi_penjualan_id
JOIN "Barangs" b ON bt.barang_id = b.id
GROUP BY t.id;

select * from harga_transaksi_penjualan


-- Function Trigger : Update Akumulasi Transaksi ketika create dan update

CREATE OR REPLACE FUNCTION sum_transaksi_penjualan_id()
RETURNS TRIGGER 
LANGUAGE PLPGSQL AS
$$
BEGIN
	UPDATE "Transaksi_Penjualans" TP
	SET total_transaksi_penjualan = (
		SELECT HTP.total_penjualan
		FROM harga_transaksi_penjualan HTP
		WHERE HTP.transaksi_id = TP."id"
		
	)
	WHERE TP."id" = NEW.transaksi_penjualan_id;
	RETURN NEW;
END;
$$;

-- Function Trigger : Update Akumulasi Transaksi ketika delete

CREATE OR REPLACE FUNCTION delete_transaksi_penjualan_id()
RETURNS TRIGGER 
LANGUAGE PLPGSQL AS
$$
BEGIN
	UPDATE "Transaksi_Penjualans" TP
	SET total_transaksi_penjualan = (
		SELECT HTP.total_penjualan
		FROM harga_transaksi_penjualan HTP
		WHERE HTP.transaksi_id = TP."id"
		
	)
	WHERE TP."id" = OLD.transaksi_penjualan_id;
	RETURN OLD;
END;
$$;


-- Trigger : Create
CREATE OR REPLACE TRIGGER trigger_create_transaksi_penjualan_id
AFTER INSERT
ON "Barang_Transaksi_Penjualans"
FOR EACH ROW
EXECUTE FUNCTION sum_transaksi_penjualan_id();

-- Trigger : Update
CREATE OR REPLACE TRIGGER trigger_update_transaksi_penjualan_id
AFTER UPDATE
ON "Barang_Transaksi_Penjualans"
FOR EACH ROW
EXECUTE FUNCTION sum_transaksi_penjualan_id();

-- Trigger : Delete
CREATE OR REPLACE TRIGGER trigger_delete_transaksi_penjualan_id
AFTER DELETE
ON "Barang_Transaksi_Penjualans"
FOR EACH ROW
EXECUTE FUNCTION delete_transaksi_penjualan_id();

SELECT * FROM "Transaksi_Penjualans"

SELECT * FROM "Barang_Transaksi_Penjualans"


-----------------------------------------------------------------------------------------
-- Active Database : Update Stok Barang Per Transaksi Penjualan (create, update, delete)
-----------------------------------------------------------------------------------------

-- Function Trigger : Update stok barang ketika create dan update
CREATE OR REPLACE FUNCTION update_jumlah_stok()
RETURNS TRIGGER
LANGUAGE PLPGSQL AS
$$
BEGIN
  IF NEW.barang_id IS NOT NULL THEN
	  IF TG_OP = 'INSERT' THEN
	  	IF NEW.jumlah_barang > (SELECT jumlah_stok FROM "Barangs" WHERE id = NEW.barang_id) THEN
      		RAISE EXCEPTION 'Stok tidak mencukupi';
    	ELSE
		    UPDATE "Barangs"
		    SET "jumlah_stok" = "jumlah_stok" - NEW.jumlah_barang
		    WHERE "id" = NEW.barang_id;
		END IF;	
	    RETURN NEW;
	  ELSIF TG_OP = 'UPDATE' THEN
	  	IF NEW.jumlah_barang > ((SELECT jumlah_stok FROM "Barangs" WHERE id = NEW.barang_id) + OLD.jumlah_barang) THEN
      		RAISE EXCEPTION 'Stok tidak mencukupi';
    	ELSE
		    UPDATE "Barangs"
		    SET "jumlah_stok" = "jumlah_stok" - (NEW.jumlah_barang - OLD.jumlah_barang)
		    WHERE "id" = NEW.barang_id;
		END IF;
	    RETURN NEW;
	  END IF;
  END IF;
  RETURN NULL;
END;
$$

-- Function Trigger : Restore stok barang ketika delete
CREATE OR REPLACE FUNCTION restore_jumlah_stok()
RETURNS TRIGGER
LANGUAGE PLPGSQL AS
$$
BEGIN
  UPDATE "Barangs"
  SET "jumlah_stok" = "jumlah_stok" + OLD.jumlah_barang
  WHERE "id" = OLD.barang_id;
  RETURN OLD;
END;
$$

-- Trigger : Create dan Update
CREATE TRIGGER update_jumlah_stok_trigger
AFTER INSERT OR UPDATE ON "Barang_Transaksi_Penjualans"
FOR EACH ROW
EXECUTE FUNCTION update_jumlah_stok();

-- Trigger : Delete
CREATE TRIGGER restore_jumlah_stok_trigger
AFTER DELETE ON "Barang_Transaksi_Penjualans"
FOR EACH ROW
EXECUTE FUNCTION restore_jumlah_stok();

---------------------------------------------------------------------------------------------
-- Active Database : Update Poin Member Per Product pada masing2 Transaksi Penjualan (create, update, delete)
---------------------------------------------------------------------------------------------


-- Function Trigger : Update Poin Member ketika Create Barang_Transaksi_Penjualan
CREATE OR REPLACE FUNCTION insert_member_points()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE "Members"
    SET poin = poin + (NEW.jumlah_barang * (SELECT harga FROM "Barangs" WHERE id = NEW.barang_id) / 10000)
    WHERE id = (SELECT member_id FROM "Transaksi_Penjualans" WHERE id = NEW.transaksi_penjualan_id);

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


-- Trigger : Create
CREATE TRIGGER add_member_points
AFTER INSERT ON "Barang_Transaksi_Penjualans"
FOR EACH ROW
EXECUTE FUNCTION insert_member_points();



-- Function Trigger : Update Poin Member ketika Update Barang_Transaksi_Penjualan
CREATE OR REPLACE FUNCTION update_member_points()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.jumlah_barang <> OLD.jumlah_barang OR NEW.barang_id <> OLD.barang_id THEN
        UPDATE "Members"
        SET poin = poin - (OLD.jumlah_barang * (SELECT harga FROM "Barangs" WHERE id = OLD.barang_id) / 10000)
        WHERE id = (SELECT member_id FROM "Transaksi_Penjualans" WHERE id = OLD.transaksi_penjualan_id);

        UPDATE "Members"
        SET poin = poin + (NEW.jumlah_barang * (SELECT harga FROM "Barangs" WHERE id = NEW.barang_id) / 10000)
        WHERE id = (SELECT member_id FROM "Transaksi_Penjualans" WHERE id = NEW.transaksi_penjualan_id);
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger : Update
CREATE TRIGGER update_member_points
AFTER UPDATE ON "Barang_Transaksi_Penjualans"
FOR EACH ROW
EXECUTE FUNCTION update_member_points();



-- Function Trigger : Update Poin Member ketika Delete Barang_Transaksi_Penjualan
CREATE OR REPLACE FUNCTION delete_member_points()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE "Members"
    SET poin = poin - (OLD.jumlah_barang * (SELECT harga FROM "Barangs" WHERE id = OLD.barang_id) / 10000)
    WHERE id = (SELECT member_id FROM "Transaksi_Penjualans" WHERE id = OLD.transaksi_penjualan_id);

    RETURN OLD;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER delete_member_points
AFTER DELETE ON "Barang_Transaksi_Penjualans"
FOR EACH ROW
EXECUTE FUNCTION delete_member_points();


---------------------------------------------------------------------------------------------
-- Active Database : Menghitung Total Transaksi Pembelian Per Transaksi ID
---------------------------------------------------------------------------------------------


-- View : Akumulasi Transaksi Pembelian per Transaksi ID
DROP VIEW IF EXISTS harga_transaksi_pembelian;
CREATE VIEW harga_transaksi_pembelian AS
SELECT t.id AS transaksi_id, SUM(b.harga * bt.jumlah_barang) AS total_pembelian
FROM "Transaksi_Pembelians" t
JOIN "Barang_Transaksi_Pembelians" bt ON t.id = transaksi_pembelian_id
JOIN "Barangs" b ON bt.barang_id = b.id
GROUP BY t.id;

select * from harga_transaksi_pembelian


-- Function Trigger : Update Akumulasi Transaksi Pembelian ketika Create dan Update Barang_Transaksi_Pembelian
CREATE OR REPLACE FUNCTION sum_transaksi_pembelian_id()
RETURNS TRIGGER 
LANGUAGE PLPGSQL AS
$$
BEGIN
	UPDATE "Transaksi_Pembelians" TP
	SET total_transaksi_pembelian = (
		SELECT HTP.total_pembelian
		FROM harga_transaksi_pembelian HTP
		WHERE HTP.transaksi_id = TP."id"
		
	)
	WHERE TP."id" = NEW.transaksi_pembelian_id;
	RETURN NEW;
END;
$$;


-- Function Trigger : Update Akumulasi Transaksi Pembelian ketika Delete Barang_Transaksi_Pembelian
CREATE OR REPLACE FUNCTION delete_transaksi_pembelian_id()
RETURNS TRIGGER 
LANGUAGE PLPGSQL AS
$$
BEGIN
	UPDATE "Transaksi_Pembelians" TP
	SET total_transaksi_pembelian = (
		SELECT HTP.total_pembelian
		FROM harga_transaksi_pembelian HTP
		WHERE HTP.transaksi_id = TP."id"
		
	)
	WHERE TP."id" = OLD.transaksi_pembelian_id;
	RETURN OLD;
END;
$$;


-- Trigger : Create
CREATE OR REPLACE TRIGGER trigger_create_transaksi_pembelian_id
AFTER INSERT
ON "Barang_Transaksi_Pembelians"
FOR EACH ROW
EXECUTE FUNCTION sum_transaksi_pembelian_id();

-- Trigger : Update
CREATE OR REPLACE TRIGGER trigger_update_transaksi_pembelian_id
AFTER UPDATE
ON "Barang_Transaksi_Pembelians"
FOR EACH ROW
EXECUTE FUNCTION sum_transaksi_pembelian_id();

-- Trigger : Delete
CREATE OR REPLACE TRIGGER trigger_delete_transaksi_pembelian_id
AFTER DELETE
ON "Barang_Transaksi_Pembelians"
FOR EACH ROW
EXECUTE FUNCTION delete_transaksi_pembelian_id();

SELECT * FROM "Transaksi_Pembelians"

SELECT * FROM "Barang_Transaksi_Pembelians"


---------------------------------------------------------------------------------------------
-- Active Database : Update Stok Barang Per Transaksi Pembelian (create, update, delete)
---------------------------------------------------------------------------------------------


-- Function Trigger : Update stok barang ketika Create dan Update Barang_Transaksi_Pembelian
CREATE OR REPLACE FUNCTION update_jumlah_stok_pembelian()
  RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE "Barangs"
    SET "jumlah_stok" = "jumlah_stok" + NEW.jumlah_barang
    WHERE "id" = NEW.barang_id;
    RETURN NEW;
  ELSIF TG_OP = 'UPDATE' THEN
    UPDATE "Barangs"
    SET "jumlah_stok" = "jumlah_stok" + (NEW.jumlah_barang - OLD.jumlah_barang)
    WHERE "id" = NEW.barang_id;
    RETURN NEW;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;


-- Trigger : Create or Update
CREATE TRIGGER trigger_jumlah_stok_pembelian_trigger
AFTER INSERT OR UPDATE ON "Barang_Transaksi_Pembelians"
FOR EACH ROW
EXECUTE FUNCTION update_jumlah_stok_pembelian();



-- Function Trigger : Update stok barang ketika Delete Barang_Transaksi_Pembelian
CREATE OR REPLACE FUNCTION trigger_jumlah_stok_pembelian_delete()
  RETURNS TRIGGER AS $$
BEGIN
  UPDATE "Barangs"
  SET "jumlah_stok" = "jumlah_stok" - OLD.jumlah_barang
  WHERE "id" = OLD.barang_id;
  RETURN OLD;
END;
$$ LANGUAGE plpgsql;


-- Trigger : Delete
CREATE TRIGGER delete_jumlah_stok_pembelian_trigger
AFTER DELETE ON "Barang_Transaksi_Pembelians"
FOR EACH ROW
EXECUTE FUNCTION trigger_jumlah_stok_pembelian_delete()