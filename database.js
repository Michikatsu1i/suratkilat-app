const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'surat.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Koneksi database gagal:', err.message);
  } else {
    console.log('Terhubung ke database SQLite: surat.db');
  }
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS letters (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      letter_type TEXT NOT NULL,
      has_kop INTEGER DEFAULT 0,
      kop_nama TEXT,
      kop_alamat TEXT,
      kop_kontak TEXT,
      nomor_surat TEXT,
      perihal TEXT,
      kota TEXT,
      tanggal TEXT,
      tujuan TEXT,
      isi_surat TEXT,
      pengirim TEXT,
      jabatan TEXT,
      has_materai INTEGER DEFAULT 0,
      font_family TEXT DEFAULT 'font-times',
      font_size TEXT DEFAULT 'text-sm',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

module.exports = db;