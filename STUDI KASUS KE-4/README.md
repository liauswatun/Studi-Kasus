# Studi Kasus Zoom ke-4: Klasifikasi Sederhana dengan Machine Learning

## Dasar materi
Materi Machine Learning membahas jenis pembelajaran mesin, alur kerja, kualitas data, dan evaluasi model. Proyek ini memakai contoh klasifikasi untuk memperlihatkan alur tersebut secara sederhana.

## Permasalahan
Bagaimana contoh data berlabel dapat digunakan untuk memprediksi kategori dari data baru, dan bagaimana memeriksa hasil prediksi model?

## Solusi
Aplikasi web menggunakan algoritma K-Nearest Neighbors (KNN). Pengguna memasukkan jam belajar dan persentase kehadiran. Model membandingkan data tersebut dengan contoh terdekat, lalu memilih label yang paling banyak muncul.

## Fitur
- Dataset sintetis dengan label.
- Input untuk prediksi.
- Pilihan jumlah tetangga (K).
- Prediksi label berdasarkan jarak.
- Evaluasi akurasi pada contoh data uji terpisah.
- Penjelasan alur machine learning.

## Teknologi
HTML, CSS, dan JavaScript. Tidak perlu server, PHP, database, atau library eksternal.

## Cara menjalankan
1. Ekstrak ZIP.
2. Buka folder `Zoom-4_Studi_Kasus_Machine_Learning` di VS Code.
3. Buka `index.html` di browser atau gunakan ekstensi Live Server.
4. Isi jam belajar dan persentase kehadiran.
5. Pilih nilai K, lalu klik **Prediksi hasil**.

## Alur
1. Siapkan data berlabel.
2. Pisahkan data latih dan data uji.
3. Hitung jarak data baru ke contoh data latih.
4. Ambil K tetangga terdekat.
5. Pilih label mayoritas.
6. Bandingkan prediksi dengan label data uji untuk menghitung akurasi.

## Batasan dan etika
Dataset ini kecil dan dibuat secara sintetis untuk demonstrasi. Akurasi yang tampil tidak membuktikan bahwa model layak menilai kelulusan mahasiswa sungguhan. Sistem nyata membutuhkan data yang representatif, pengujian yang benar, pemeriksaan bias, persetujuan penggunaan data, dan penilaian manusia.

## Upload ke repository GitHub yang sama
1. Buka repository `Studi-Kasus`.
2. Pilih **Add file → Upload files**.
3. Unggah file proyek ke dalam folder `Zoom-4`.
4. Pesan commit: `Tambah studi kasus Zoom ke-4 tentang Machine Learning`.
5. Klik **Commit changes**.

Untuk mempertahankan folder dan struktur file, GitHub Desktop juga dapat digunakan.
