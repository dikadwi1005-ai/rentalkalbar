# Rental Kalbar — prototipe visual

HTML, CSS, dan JavaScript tanpa framework atau instalasi dependency.

## Menjalankan

Jalankan `npm run dev`, lalu buka http://localhost:4173.

Pemeriksaan sintaks: `npm run check`.

## Halaman dan interaksi

- Beranda responsif, kategori mobil, layanan lepas kunci / dengan driver.
- Pencarian berdasarkan kota dan kategori, tanggal, urutan harga.
- Detail mobil dan simulasi pemesanan.
- Favorit dan pesanan demo tersimpan pada localStorage browser.
- Halaman mitra, promo, iklan lokal, akun demo, dan bantuan.
- Manifest PWA, ikon 192/512, navigasi bawah di ponsel, service worker offline.

## Mencoba PWA

Buka lewat localhost atau hosting HTTPS. Setelah halaman selesai dimuat pertama kali, aset lokal tersimpan untuk kunjungan offline. Gunakan menu Pasang aplikasi pada Chrome / Edge yang mendukung, atau Bagikan → Tambahkan ke Layar Utama pada Safari iPhone. Tombol pemasangan dalam halaman muncul bila browser menyediakan install prompt. Font Google bersifat opsional; saat tidak tersedia, browser menggunakan sans-serif lokal.

Untuk mencoba di ponsel sungguhan, host pada HTTPS terlebih dahulu. Server pengembangan hanya terikat ke loopback komputer, tidak diekspos ke jaringan lokal.

## Batas demo

Seluruh harga, rating, ulasan, armada, dan iklan adalah contoh. Foto kartu ditampilkan dari area foto referensi pengguna melalui CSS; bukan jaminan spesifikasi unit. Foto banner dibuat dengan ImageGen. Belum ada database, login nyata, pembayaran, pengiriman formulir, integrasi WhatsApp, atau pengecekan ketersediaan. Tarif driver belum termasuk estimasi. Formulir mitra dan akun hanya menampilkan konfirmasi demo.

Source berada di folder proyek lokal. Tidak ada deployment atau push GitHub otomatis pada tahap contoh visual ini.
