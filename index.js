const express = require('express');

const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const barangRoute = require('./app/routes/barangRoute');
const jenisBarangRoute = require('./app/routes/jenisBarangRoute');

///////////API DISINI///////////////////////

app.use('/barang', barangRoute);
app.use('/jenis-barang', jenisBarangRoute);


///////////////////////////

app.get('/', (req, res) => res.send('minimarket coming soon!'));

app.listen(port, () => console.log(`Server berjalan di http://localhost:${port}!`));
