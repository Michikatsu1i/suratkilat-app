const templates = {
  lamaran: {
    kop: false,
    nomor: "",
    perihal: "Lamaran Pekerjaan - Software Engineer",
    tujuan: "Yth. HRD Recruitment Manager\nPT Inovasi Teknologi Bangsa\nJl. Sudirman Kav. 21, Jakarta Pusat",
    isi: "Dengan hormat,\n\nSehubungan dengan lowongan pekerjaan posisi Software Engineer di PT Inovasi Teknologi Bangsa, saya bermaksud mengajukan diri untuk bergabung dengan perusahaan yang Bapak/Ibu pimpin.\n\nSaya memiliki pengalaman dalam rekayasa perangkat lunak dan arsitektur database. Saya terbiasa berkolaborasi dengan tim secara adaptif dan terstruktur.\n\nBesar harapan saya untuk memperoleh kesempatan wawancara. Atas perhatian Bapak/Ibu, saya sampaikan terima kasih.",
    pengirim: "Rian Pratama, S.Kom.",
    jabatan: "Pelamar Pekerjaan",
    materai: false
  },
  izin: {
    kop: false,
    nomor: "",
    perihal: "Surat Permohonan Izin Tidak Masuk",
    tujuan: "Yth. Pimpinan Operasional\nPT Sejahtera Bersama\ndi Tempat",
    isi: "Dengan hormat,\n\nSaya bermaksud memberitahukan bahwa saya berhalangan hadir bekerja pada hari ini sehubungan dengan kondisi kesehatan yang kurang baik dan memerlukan istirahat medis.\n\nDemikian surat ini saya sampaikan dengan sebenarnya. Atas pengertian Bapak/Ibu, saya ucapkan terima kasih.",
    pengirim: "Dimas Arya",
    jabatan: "Staff Operasional",
    materai: false
  },
  resign: {
    kop: false,
    nomor: "",
    perihal: "Pemberitahuan Pengunduran Diri (Resign)",
    tujuan: "Yth. Head of HRD\nPT Mahakarya Digital Indonesia\nJakarta",
    isi: "Dengan hormat,\n\nMelalui surat ini, saya bermaksud mengajukan permohonan pengunduran diri terhitung efektif 30 hari ke depan sejak surat ini diajukan.\n\nSaya mengucapkan terima kasih yang sebesar-besarnya atas bimbingan dan kesempatan kerja sama yang baik selama masa dinas saya.",
    pengirim: "Arif Kurniawan",
    jabatan: "Senior UI/UX Designer",
    materai: false
  },
  pernyataan: {
    kop: true,
    nomor: "044/SP-DIR/XI/2026",
    perihal: "Surat Pernyataan Kesanggupan & Integritas",
    tujuan: "Yth. Panitia Pengadaan Barang & Jasa\ndi Tempat",
    isi: "Dengan hormat,\n\nMenyatakan dengan sebenar-benarnya bahwa perusahaan kami berkomitmen penuh menyelesaikan pekerjaan tepat waktu sesuai standar teknis dan menjunjung tinggi kode etik profesional tanpa benturan kepentingan.",
    pengirim: "Hendra Gunawan, S.T.",
    jabatan: "Direktur Utama",
    materai: true
  },
  rapat: {
    kop: true,
    nomor: "102/UND-DIR/XI/2026",
    perihal: "Undangan Rapat Koordinasi Evaluasi",
    tujuan: "Yth. Seluruh Kepala Divisi & Manajer\ndi Tempat",
    isi: "Dengan hormat,\n\nSehubungan dengan agenda evaluasi kinerja tahunan, kami mengundang Bapak/Ibu untuk hadir pada rapat koordinasi yang akan diadakan Jumat pukul 09.00 WIB di Ruang Rapat Utama Lantai 2.",
    pengirim: "Hendra Gunawan, S.T.",
    jabatan: "Direktur Utama",
    materai: false
  }
};

const dom = {
  template: document.getElementById('templateSelector'),
  fontFamily: document.getElementById('fontFamily'),
  fontSize: document.getElementById('fontSize'),
  letterPaper: document.getElementById('letterPaper'),
  toggleKop: document.getElementById('toggleKop'),
  kopFields: document.getElementById('kopFields'),
  kopNama: document.getElementById('kopNama'),
  kopAlamat: document.getElementById('kopAlamat'),
  kopKontak: document.getElementById('kopKontak'),
  renderKop: document.getElementById('renderKop'),
  viewKopNama: document.getElementById('viewKopNama'),
  viewKopAlamat: document.getElementById('viewKopAlamat'),
  viewKopKontak: document.getElementById('viewKopKontak'),
  inputKota: document.getElementById('inputKota'),
  inputTanggal: document.getElementById('inputTanggal'),
  inputNomor: document.getElementById('inputNomor'),
  inputPerihal: document.getElementById('inputPerihal'),
  inputTujuan: document.getElementById('inputTujuan'),
  inputIsi: document.getElementById('inputIsi'),
  inputPengirim: document.getElementById('inputPengirim'),
  inputJabatan: document.getElementById('inputJabatan'),
  toggleMaterai: document.getElementById('toggleMaterai'),
  viewKota: document.getElementById('viewKota'),
  viewTanggal: document.getElementById('viewTanggal'),
  renderNomorGroup: document.getElementById('renderNomorGroup'),
  viewNomor: document.getElementById('viewNomor'),
  viewPerihal: document.getElementById('viewPerihal'),
  viewTujuan: document.getElementById('viewTujuan'),
  viewIsi: document.getElementById('viewIsi'),
  viewPengirim: document.getElementById('viewPengirim'),
  viewJabatan: document.getElementById('viewJabatan'),
  viewMaterai: document.getElementById('viewMaterai'),
  spacerNoMaterai: document.getElementById('spacerNoMaterai'),
  btnCopy: document.getElementById('btnCopy'),
  btnSaveDb: document.getElementById('btnSaveDb'),
  tabFormBtn: document.getElementById('tabFormBtn'),
  tabPreviewBtn: document.getElementById('tabPreviewBtn'),
  formSection: document.getElementById('formSection'),
  previewSection: document.getElementById('previewSection')
};

function renderPreview() {
  if (dom.toggleKop.checked) {
    dom.renderKop.classList.remove('hidden');
    dom.kopFields.classList.remove('hidden');
    dom.viewKopNama.textContent = dom.kopNama.value;
    dom.viewKopAlamat.textContent = dom.kopAlamat.value;
    dom.viewKopKontak.textContent = dom.kopKontak.value;
  } else {
    dom.renderKop.classList.add('hidden');
    dom.kopFields.classList.add('hidden');
  }

  if (dom.inputNomor.value.trim() !== "" || dom.inputPerihal.value.trim() !== "") {
    dom.renderNomorGroup.classList.remove('hidden');
    dom.viewNomor.textContent = dom.inputNomor.value || "-";
    dom.viewPerihal.textContent = dom.inputPerihal.value || "-";
  } else {
    dom.renderNomorGroup.classList.add('hidden');
  }

  dom.viewKota.textContent = dom.inputKota.value;
  dom.viewTanggal.textContent = dom.inputTanggal.value;
  dom.viewTujuan.textContent = dom.inputTujuan.value;
  dom.viewIsi.textContent = dom.inputIsi.value;
  dom.viewPengirim.textContent = dom.inputPengirim.value;
  dom.viewJabatan.textContent = dom.inputJabatan.value;

  if (dom.toggleMaterai.checked) {
    dom.viewMaterai.classList.remove('hidden');
    dom.spacerNoMaterai.classList.add('hidden');
  } else {
    dom.viewMaterai.classList.add('hidden');
    dom.spacerNoMaterai.classList.remove('hidden');
  }

  dom.letterPaper.className = `sheet-a4 text-slate-900 flex flex-col justify-between rounded-md ${dom.fontFamily.value} ${dom.fontSize.value}`;
}

function applyTemplate(key) {
  const data = templates[key];
  if (!data) return;

  dom.toggleKop.checked = data.kop;
  dom.inputNomor.value = data.nomor;
  dom.inputPerihal.value = data.perihal;
  dom.inputTujuan.value = data.tujuan;
  dom.inputIsi.value = data.isi;
  dom.inputPengirim.value = data.pengirim;
  dom.inputJabatan.value = data.jabatan;
  dom.toggleMaterai.checked = data.materai;

  renderPreview();
}

// Handler Simpan ke Database
dom.btnSaveDb.addEventListener('click', async () => {
  const payload = {
    title: dom.inputPerihal.value || 'Surat ' + dom.template.value,
    letter_type: dom.template.value,
    has_kop: dom.toggleKop.checked,
    kop_nama: dom.kopNama.value,
    kop_alamat: dom.kopAlamat.value,
    kop_kontak: dom.kopKontak.value,
    nomor_surat: dom.inputNomor.value,
    perihal: dom.inputPerihal.value,
    kota: dom.inputKota.value,
    tanggal: dom.inputTanggal.value,
    tujuan: dom.inputTujuan.value,
    isi_surat: dom.inputIsi.value,
    pengirim: dom.inputPengirim.value,
    jabatan: dom.inputJabatan.value,
    has_materai: dom.toggleMaterai.checked,
    font_family: dom.fontFamily.value,
    font_size: dom.fontSize.value
  };

  try {
    const res = await fetch('/api/letters', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const result = await res.json();
    if (result.success) {
      alert('Surat berhasil diarsipkan ke database!');
    } else {
      alert('Gagal menyimpan: ' + result.message);
    }
  } catch (err) {
    alert('Terjadi kesalahan jaringan.');
  }
});

// Event Listeners Input
[
  dom.fontFamily, dom.fontSize, dom.toggleKop, dom.kopNama, dom.kopAlamat, dom.kopKontak,
  dom.inputKota, dom.inputTanggal, dom.inputNomor, dom.inputPerihal, dom.inputTujuan,
  dom.inputIsi, dom.inputPengirim, dom.inputJabatan, dom.toggleMaterai
].forEach(input => {
  input.addEventListener('input', renderPreview);
  input.addEventListener('change', renderPreview);
});

dom.template.addEventListener('change', (e) => applyTemplate(e.target.value));

if (dom.tabFormBtn && dom.tabPreviewBtn) {
  dom.tabFormBtn.addEventListener('click', () => {
    dom.formSection.classList.remove('hidden');
    dom.previewSection.classList.add('hidden');
    dom.tabFormBtn.className = "flex-1 py-2 text-xs font-bold rounded-lg bg-white text-blue-600 shadow-sm flex items-center justify-center gap-1.5";
    dom.tabPreviewBtn.className = "flex-1 py-2 text-xs font-semibold rounded-lg text-slate-600 flex items-center justify-center gap-1.5";
  });

  dom.tabPreviewBtn.addEventListener('click', () => {
    dom.formSection.classList.add('hidden');
    dom.previewSection.classList.remove('hidden');
    dom.tabPreviewBtn.className = "flex-1 py-2 text-xs font-bold rounded-lg bg-white text-blue-600 shadow-sm flex items-center justify-center gap-1.5";
    dom.tabFormBtn.className = "flex-1 py-2 text-xs font-semibold rounded-lg text-slate-600 flex items-center justify-center gap-1.5";
  });
}

// Inisialisasi awal
dom.inputTanggal.value = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
applyTemplate('lamaran');