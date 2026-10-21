# Studi Kasus Zoom ke-6: Pemantauan Deforestasi dengan Citra Satelit dan AI

## Dasar materi
Materi membahas pemantauan perubahan hutan dengan citra optik Sentinel-2 dan radar Sentinel-1, deforestation alerts, penggunaan AI seperti Convolutional Neural Network (CNN) untuk mengelompokkan kemungkinan penyebab gangguan, evaluasi model termasuk macro F1-score, serta kebutuhan verifikasi lapangan.

## Permasalahan
Pemantauan hutan membutuhkan cara untuk menyusun indikasi perubahan, melihat wilayah dan periode yang terdampak, serta menentukan catatan mana yang perlu diperiksa lebih lanjut. Namun, perubahan pada citra tidak otomatis memastikan penyebab kerusakan.

## Solusi
Membuat dashboard web sederhana untuk menampilkan daftar indikasi perubahan hutan, menyaring data berdasarkan wilayah, tahun, dan kemungkinan penyebab, serta membandingkan perkiraan luas indikasi melalui grafik.

## Fitur
- Ringkasan jumlah indikasi dan catatan yang perlu diverifikasi.
- Filter wilayah, tahun, dan kemungkinan penyebab.
- Tabel indikasi perubahan tutupan hutan.
- Grafik perkiraan area per kategori penyebab.
- Penjelasan alur citra satelit, AI, evaluasi, dan verifikasi.

## Batasan penting
Data di `app.js` adalah data simulasi, bukan data resmi satelit, bukan GeoJSON asli, dan bukan output model CNN. Proyek ini hanya membuat antarmuka dashboard untuk memahami cara menyajikan dan menyaring informasi. Tidak ada deteksi deforestasi otomatis atau deteksi api sungguhan di aplikasi ini.

## Ringkasan materi yang diterapkan
- Sentinel-2 merupakan citra optik yang dapat terganggu awan.
- Sentinel-1 menggunakan radar dan dapat melengkapi pemantauan saat berawan.
- CNN dapat membantu mengklasifikasikan pola gangguan jika dilatih dengan data berlabel yang sesuai.
- Hasil klasifikasi harus dievaluasi. Macro F1-score membantu melihat kinerja tiap kategori, termasuk kelas yang datanya lebih sedikit.
- Verifikasi lapangan diperlukan untuk menguatkan dugaan penyebab.
- Untuk peringatan kebakaran yang cepat, data sensor termal dapat digunakan sebagai pelengkap; klasifikasi perubahan tutupan hutan tidak selalu cocok untuk peringatan real-time.

## Teknologi
HTML, CSS, JavaScript, dan Chart.js dari CDN. Tidak perlu Python, PHP, atau database untuk menjalankan contoh ini.

## Cara menjalankan
1. Ekstrak ZIP.
2. Buka folder `Zoom-6_Studi_Kasus_Pemantauan_Deforestasi_AI` di VS Code.
3. Buka `index.html` melalui browser atau ekstensi Live Server.
4. Pastikan internet aktif agar Chart.js dapat dimuat.
5. Gunakan filter wilayah, tahun, dan jenis indikasi untuk melihat perubahan daftar dan grafik.

## Upload ke GitHub
1. Buka repository `Studi-Kasus`.
2. Pilih **Add file → Upload files**.
3. Unggah isi proyek ke dalam folder `Zoom-6`.
4. Pesan commit: `Tambah studi kasus Zoom ke-6 tentang pemantauan deforestasi dan AI`.
5. Klik **Commit changes**.

## Pengembangan berikutnya
Agar dashboard benar-benar memantau hutan, hubungkan dengan sumber data satelit/alert yang valid, simpan metadata dan geometri spasial yang benar, dokumentasikan sumber serta tanggal pembaruan data, dan lakukan validasi sebelum menampilkan penyebab sebagai informasi terkonfirmasi.
