<!-- Modified for VgoOffice (https://github.com/vgo1012/VgoOffice); see MODIFICATIONS.md. -->

# Memasang VgoOffice

[Rilis](https://github.com/vgo1012/VgoOffice/releases) — Gunakan penginstal yang dilampirkan pada rilis. Halaman ini tidak berarti berkas biner sudah diterbitkan di GitHub. Build lokal tidak ditandatangani jika kredensial penandatanganan tidak diberikan.

## Sebelum memasang

Edisi ini telah diuji pada Windows x64. Target kode macOS dan Linux tetap tersedia, tetapi edisi ini belum divalidasi di sana. Pilih paket hanya jika rilisnya mendukung sistem operasi Anda.

## Memasang dan menjalankan

1. Simpan dokumen terbuka dan tutup versi lama sebelum memperbarui.
2. Jalankan penginstal .exe Windows hingga selesai.
3. Mulai VgoOffice melalui pintasan desktop atau menu Mulai.

Penginstal menyimpan sumber daya sekali, tanpa mengekstrak program portabel setiap kali dijalankan. VgoOffice.exe saja tidak menyertakan sumber daya editor yang diperlukan.

## Pembaruan dan preferensi

Pembaruan mempertahankan identitas pemasangan dan folder profil Eoffice. Nama folder Eoffice adalah normal untuk kompatibilitas. Di Pengaturan → Umum, pilih tampilan terang, gelap, atau sistem; latar bawaan berwarna biru-abu muda. Warna dokumen diatur terpisah.

## Versi dan proyek

Pengaturan → Tentang menampilkan versi terpasang dan tautan proyek VgoOffice. Beri Star jika bermanfaat. Pembaruan bergantung pada konfigurasi build; periksa halaman rilis jika pembaruan dalam aplikasi tidak tersedia.

[VgoOffice · Star](https://github.com/vgo1012/VgoOffice)

## Baris perintah dan AI

Perintah kompatibel tetap genoffice. Pengaturan → Integrasi menampilkan jalur terpasang dan konfigurasi. Jalankan perintah berikut dengan jalur itu atau setelah menambahkan CLI ke PATH.

```sh
genoffice --version
```

Login akun aplikasi telah dihapus. Konfigurasikan API model Anda, endpoint kompatibel OpenAI, atau Codex CLI terpasang. Autentikasi dan biaya pihak ketiga tetap terpisah; penyuntingan lokal tidak memerlukan akun VgoOffice.

[Pengaturan integrasi](help://settings-integrations) · [Model AI](help://ai-models)
