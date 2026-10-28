# ❄️ YukiKotoba

<p align="center">
  <img src="Frontend/YukiKotoba/src/assets/hero.png" alt="Ilustrasi belajar bahasa Jepang YukiKotoba" width="480" />
</p>

<p align="center">
  <strong>Belajar bahasa Jepang dengan langkah kecil, materi terarah, dan latihan yang menyenangkan.</strong>
</p>

<p align="center">
  <a href="#mulai-belajar">Mulai belajar</a> ·
  <a href="#fitur-utama">Fitur</a> ·
  <a href="#menjalankan-proyek">Menjalankan proyek</a>
</p>

YukiKotoba adalah aplikasi web pembelajaran bahasa Jepang untuk pemula. Jelajahi huruf Jepang, kosakata sehari-hari, kanji dasar, dan latihan kuis dalam satu pengalaman belajar yang ringan dan interaktif.

## ✨ Fitur Utama

- **Peta level** untuk melihat perjalanan belajar secara bertahap.
- **Materi Hiragana, Katakana, dan Kanji dasar** yang mudah dijelajahi.
- **Kosakata praktis** lengkap dengan romaji, arti, kategori, dan pelafalan.
- **Tambah kosakata sendiri** melalui form interaktif.
- **Latihan kuis dan lencana** untuk menjaga motivasi belajar.
- **Mode terang/gelap** agar tetap nyaman digunakan kapan pun.
- **Efek sakura** yang membuat suasana belajar lebih hidup.

## 🎯 Mulai Belajar

1. Buka halaman **Peta Level** untuk memilih materi.
2. Pelajari Hiragana atau Katakana sebagai pondasi membaca.
3. Dengarkan pelafalan kosakata dengan memilih kata Jepang pada daftar.
4. Tambahkan kosakata baru yang ingin diingat.
5. Uji pemahaman melalui halaman **Latihan Kuis** dan kumpulkan lencana.

> Pelafalan menggunakan fitur *Speech Synthesis* pada browser. Ketersediaan suara bahasa Jepang dapat berbeda pada setiap perangkat dan browser.

## 🛠️ Teknologi

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Bootstrap](https://getbootstrap.com/) dan Bootstrap Icons
- JavaScript, CSS, dan Web Speech API

## 🚀 Menjalankan Proyek

Pastikan [Node.js](https://nodejs.org/) sudah terpasang, kemudian jalankan:

```bash
cd Frontend/YukiKotoba
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan Vite di terminal untuk mulai menggunakan aplikasi.

### Perintah Lainnya

```bash
# Memeriksa kualitas kode
npm run lint

# Membuat build produksi
npm run build

# Menjalankan pratinjau build produksi
npm run preview
```

## 📁 Struktur Proyek

```text
YukiKotoba_JapaneseStudy_103122430009/
├── README.md
└── Frontend/
    └── YukiKotoba/
        ├── public/          # Aset publik
        ├── src/
        │   ├── components/  # Komponen antarmuka yang dapat digunakan ulang
        │   ├── data/        # Data materi pembelajaran
        │   ├── pages/       # Halaman materi dan latihan
        │   ├── utils/       # Utilitas, termasuk pelafalan
        │   └── App.jsx      # State dan navigasi aplikasi
        └── package.json
```

## 🤝 Kontribusi

Saran materi, perbaikan tampilan, dan pengembangan fitur sangat terbuka. Buat *issue* atau ajukan *pull request* dengan penjelasan perubahan yang jelas.

---

<p align="center">Dibuat untuk menemani langkah pertama belajar bahasa Jepang. がんばりましょう！</p>
