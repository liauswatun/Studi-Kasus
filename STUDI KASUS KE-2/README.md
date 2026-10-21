# Studi Kasus Zoom ke-2: Simulasi Pengelolaan HPC

## Materi yang menjadi dasar
Catatan materi Zoom ke-2 mencakup dasar-dasar High Performance Computing (HPC), penerapan AIoT/HPC, akses dan pelatihan mahasiswa, komunitas atau pendanaan, efisiensi energi, tantangan implementasi, dan belajar lintas bidang.

## Permasalahan
Jika banyak pekerjaan komputasi diajukan oleh pengguna, sumber daya perlu dikelola agar antrean dan penggunaan komputasi dapat dipantau. Pengguna juga perlu memahami bahwa sumber daya komputasi menggunakan energi.

## Solusi
Dashboard simulasi berbasis web untuk menambahkan pekerjaan komputasi, melihat status antrean, memantau penggunaan CPU dan memori pada simulasi, serta memperkirakan energi berdasarkan asumsi daya dan durasi.

## Fitur
- Tambah pekerjaan dengan nama, jumlah core CPU, kebutuhan memori, dan durasi.
- Tampilkan antrean dan status pekerjaan.
- Simulasikan pemrosesan antrean.
- Perkirakan energi dengan rumus sederhana.
- Hapus pekerjaan dari daftar.

## Teknologi
HTML, CSS, dan JavaScript. Tidak memerlukan PHP, database, atau server HPC.

## Cara menjalankan
1. Ekstrak folder proyek.
2. Buka folder `Zoom-2_Studi_Kasus_HPC` di VS Code.
3. Buka `index.html` di browser, atau gunakan ekstensi Live Server.
4. Isi nama pekerjaan, pilih kebutuhan CPU, memori, dan durasi.
5. Klik **Tambahkan ke antrean**, lalu klik **Jalankan simulasi antrean**.

## Perhitungan energi
Aplikasi menggunakan asumsi daya latihan:
- Daya (kW) = jumlah core × 0,08 + memori (GB) × 0,025
- Energi (kWh) = daya (kW) × durasi (jam)

Angka tersebut hanya asumsi untuk menjelaskan konsep. Konsumsi energi HPC nyata bergantung pada perangkat keras, beban kerja, pendinginan, dan faktor lainnya.

## Batasan
Ini bukan scheduler HPC sungguhan dan tidak menjalankan job komputasi. Status antrean serta energi hanya disimulasikan di browser. Proyek ini tidak mengukur konsumsi listrik aktual dan tidak membahas hasil eksperimen AIoT secara langsung.

## Upload ke repository GitHub yang sama
1. Buka repository `Studi-Kasus` milikmu di GitHub.
2. Klik **Add file → Upload files**.
3. Di komputer, buka folder proyek ini.
4. Unggah file `index.html`, `style.css`, `app.js`, dan `README.md` ke dalam folder bernama `Zoom-2` di repository. Jika halaman upload tidak mempertahankan folder lokal, gunakan GitHub Desktop untuk mempertahankan struktur folder.
5. Isi pesan commit: `Tambah studi kasus Zoom ke-2 tentang HPC`.
6. Klik **Commit changes**.

Simpan proyek Zoom ke-2 sebagai folder terpisah dari Zoom ke-1. Dengan begitu, satu repository dapat memuat keenam studi kasus.
