# Studi Kasus Zoom ke-5: IMK dan Visualisasi Data

## Dasar materi
Resume materi pertemuan membahas Interaksi Manusia dan Komputer (IMK), aspek kognitif dan persepsi, aksesibilitas, proses desain dan evaluasi, kebutuhan pengguna, user persona, serta visualisasi data dan dashboard interaktif.

## Permasalahan
Informasi layanan yang disajikan hanya sebagai angka mentah sulit dibaca. Dashboard yang terlalu ramai atau tidak jelas juga dapat membuat pengguna salah memahami informasi.

## Solusi
Membuat dashboard layanan kampus berbasis web dengan ringkasan utama, grafik tren, grafik perbandingan kategori, filter, dan tabel detail. Tata letaknya menampilkan ringkasan terlebih dahulu, kemudian grafik dan detail, agar pengguna dapat memahami informasi secara bertahap.

## Fitur
- Filter periode dan kategori.
- Ringkasan total permintaan, persentase penyelesaian, dan kategori terbanyak.
- Grafik garis untuk melihat tren bulanan.
- Grafik batang untuk membandingkan kategori.
- Tabel sebagai alternatif untuk membaca data.
- Reset filter dan ringkasan yang berubah sesuai filter.

## Prinsip IMK yang diterapkan
- Label sederhana dan konsisten.
- Informasi utama ditampilkan terlebih dahulu untuk mengurangi beban kognitif.
- Filter diletakkan di area yang mudah ditemukan.
- Grafik diberi judul dan sumbu yang jelas.
- Tabel menyertai grafik agar data tetap bisa dibaca dalam format lain.
- Data dan kesimpulan tidak mengklaim lebih dari yang didukung oleh angka.

## Data
Semua angka pada `app.js` adalah data simulasi. Bukan data resmi kampus atau data pengguna nyata.

## Teknologi
HTML, CSS, JavaScript, dan Chart.js melalui CDN. Tidak memerlukan PHP atau database.

## Cara menjalankan
1. Ekstrak ZIP.
2. Buka folder `Zoom-5_Studi_Kasus_IMK_Visualisasi_Data` di VS Code.
3. Buka `index.html` melalui browser atau ekstensi Live Server.
4. Pastikan internet aktif agar Chart.js dapat dimuat.
5. Ubah filter periode dan kategori untuk melihat perubahan ringkasan dan grafik.

## Evaluasi sederhana
Periksa apakah pengguna dapat menemukan jumlah permintaan, membandingkan kategori, memfilter data, dan mengembalikan tampilan awal tanpa kebingungan. Pengujian yang lebih formal dapat dilakukan dengan meminta beberapa pengguna menyelesaikan tugas, lalu mencatat keberhasilan, waktu, dan kendala mereka.

## Upload ke repository GitHub yang sama
1. Buka repository `Studi-Kasus`.
2. Klik **Add file → Upload files**.
3. Unggah isi proyek ke dalam folder `Zoom-5`.
4. Pesan commit: `Tambah studi kasus Zoom ke-5 tentang IMK dan visualisasi data`.
5. Klik **Commit changes**.

Gunakan GitHub Desktop jika ingin mempertahankan struktur folder secara lebih mudah.
