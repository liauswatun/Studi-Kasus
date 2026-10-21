# Studi Kasus Zoom ke-3: Pemetaan dan Analisis Spasial Sederhana

## Dasar materi
Materi Zoom ke-3 membahas karier dan persaingan di era industri dengan GIS. Keterampilan yang relevan mencakup pemetaan, analisis spasial, data geografis, serta penggunaan perangkat dan bahasa pemrograman seperti SQL, Python, atau JavaScript.

## Permasalahan
Data lokasi sering lebih mudah dipahami ketika ditampilkan pada peta. Pengguna perlu melihat sebaran lokasi dan menyaring kategori agar informasi yang relevan lebih mudah ditemukan.

## Solusi
Membuat aplikasi web GIS sederhana untuk menampilkan titik fasilitas contoh pada peta interaktif, memfilter kategori, mencari nama lokasi, dan melihat atribut titik.

## Fitur
- Peta interaktif berbasis Leaflet dan OpenStreetMap.
- Filter kategori fasilitas.
- Pencarian berdasarkan nama.
- Tabel daftar titik yang terhubung dengan peta.
- Ringkasan jumlah titik dan kesimpulan awal.

## Data dan batasan
Koordinat serta nama lokasi dalam aplikasi ini adalah data simulasi di sekitar area Bengkulu untuk latihan, bukan daftar resmi fasilitas. Jangan menggunakannya untuk navigasi atau keputusan nyata. Peta dasar dimuat dari OpenStreetMap sehingga komputer perlu terhubung ke internet.

## Teknologi
HTML, CSS, JavaScript, Leaflet, dan tile OpenStreetMap.

## Cara menjalankan
1. Ekstrak ZIP.
2. Buka folder `Zoom-3_Studi_Kasus_GIS` di VS Code.
3. Buka `index.html` dengan browser atau gunakan ekstensi Live Server.
4. Pastikan koneksi internet aktif agar peta dasar dimuat.
5. Coba filter kategori, pencarian lokasi, dan klik baris tabel untuk memusatkan peta.

## Upload ke repository GitHub yang sama
1. Buka repository `Studi-Kasus`.
2. Pilih **Add file → Upload files**.
3. Unggah file proyek ke dalam folder `Zoom-3` pada repository. Untuk mempertahankan struktur folder, GitHub Desktop juga bisa digunakan.
4. Pesan commit: `Tambah studi kasus Zoom ke-3 tentang GIS`.
5. Klik **Commit changes**.

## Pengembangan lanjutan
Agar mendekati proyek GIS nyata, ganti data simulasi dengan dataset resmi yang memiliki sumber dan izin penggunaan yang jelas, verifikasi koordinat, lalu dokumentasikan sumber data serta tanggal pembaruannya.
