const express = require('express');
const path = require('path');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Template Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Halaman Utama (Generator Surat)
app.get('/', (req, res) => {
  res.render('index', { activePage: 'home' });
});

// Halaman Arsip Riwayat Surat
app.get('/history', (req, res) => {
  db.all('SELECT * FROM letters ORDER BY created_at DESC', [], (err, rows) => {
    if (err) {
      return res.status(500).send('Kesalahan Database: ' + err.message);
    }
    res.render('history', { letters: rows, activePage: 'history' });
  });
});

// Halaman Detail / Print Surat Tertentu
app.get('/letter/:id', (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM letters WHERE id = ?', [id], (err, row) => {
    if (err || !row) {
      return res.status(404).send('Surat tidak ditemukan');
    }
    res.render('detail', { letter: row, activePage: 'detail' });
  });
});

// API: Simpan Surat ke Database
app.post('/api/letters', (req, res) => {
  const {
    title, letter_type, has_kop, kop_nama, kop_alamat, kop_kontak,
    nomor_surat, perihal, kota, tanggal, tujuan, isi_surat,
    pengirim, jabatan, has_materai, font_family, font_size
  } = req.body;

  const sql = `
    INSERT INTO letters (
      title, letter_type, has_kop, kop_nama, kop_alamat, kop_kontak,
      nomor_surat, perihal, kota, tanggal, tujuan, isi_surat,
      pengirim, jabatan, has_materai, font_family, font_size
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const params = [
    title || perihal || 'Surat Tanpa Judul',
    letter_type || 'custom',
    has_kop ? 1 : 0,
    kop_nama || '',
    kop_alamat || '',
    kop_kontak || '',
    nomor_surat || '',
    perihal || '',
    kota || 'Jakarta',
    tanggal || '',
    tujuan || '',
    isi_surat || '',
    pengirim || '',
    jabatan || '',
    has_materai ? 1 : 0,
    font_family || 'font-times',
    font_size || 'text-sm'
  ];

  db.run(sql, params, function (err) {
    if (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
    res.json({ success: true, id: this.lastID });
  });
});

// API: Hapus Surat
app.delete('/api/letters/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM letters WHERE id = ?', [id], function (err) {
    if (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
    res.json({ success: true, message: 'Surat berhasil dihapus' });
  });
});

app.listen(PORT, () => {
  console.log(`Server SuratKilat Pro aktif di http://localhost:${PORT}`);
});