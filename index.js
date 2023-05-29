const express = require('express');

const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const barangRoute = require('./app/routes/barangRoute');
const jenisBarangRoute = require('./app/routes/jenisBarangRoute');
const memberRoute = require('./app/routes/memberRoute');
const pegawaiRoute = require('./app/routes/pegawaiRoute');
const transaksiPembelianRoute = require('./app/routes/transaksiPembelianRoute');
const transaksiPenjualanRoute = require('./app/routes/transaksiPenjualanRoute');
const supplierRoute = require('./app/routes/supplierRoute');
const barangTransaksiPenjualanRoute = require('./app/routes/barangTransaksiPenjualanRoute');
const barangTransaksiPembelianRoute = require('./app/routes/barangTransaksiPembelianRoute');
const bidangKerjaRoute = require('./app/routes/bidangKerjaRoute');

///////////API DISINI///////////////////////

app.use('/barang', barangRoute);
app.use('/jenis-barang', jenisBarangRoute);
app.use('/member', memberRoute);
app.use('/pegawai', pegawaiRoute);
app.use('/transaksi-pembelian', transaksiPembelianRoute);
app.use('/transaksi-penjualan', transaksiPenjualanRoute);
app.use('/supplier', supplierRoute);
app.use('/barang-transaksi-penjualan', barangTransaksiPenjualanRoute);
app.use('/barang-transaksi-pembelian', barangTransaksiPembelianRoute);
app.use('/bidang-kerja', bidangKerjaRoute);

///////////////////////////

app.get('/', (req, res) => res.send('minimarket coming soon!'));

app.listen(port, () => console.log(`Server berjalan di http://localhost:${port}!`));
