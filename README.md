# batikpos-landing

Landing page BatikPOS berbasis React dan Vite, berbahasa Indonesia dan responsif.

## Menjalankan secara lokal

Gunakan Node.js 22.12+ (atau 20.19+).

```sh
npm ci
npm run dev
```

`npm run lint` memeriksa kode, `npm run build` membuat hasil produksi di `dist/`,
dan `npm run preview` menampilkan hasil build.

## Slideshow produk

Slideshow memiliki tiga ilustrasi SVG lokal di `public/images/`: dashboard,
kasir, dan stok. Semua angka adalah data contoh, bukan screenshot aplikasi
BatikPOS final. Ganti ilustrasi tersebut dengan screenshot produk asli dan
sesuaikan daftar `slides` di `src/App.jsx` saat aset tersedia.

Slide berganti setiap enam detik, berhenti sementara saat diarahkan mouse atau
fokus keyboard, dan dapat dikontrol dengan tombol sebelumnya, berikutnya, tab
pilihan, serta putar/jeda. Preferensi reduced motion menonaktifkan autoplay awal
dan animasi transisi. Halaman ini tidak menyertakan backend atau pendaftaran.
Font Google bersifat opsional; font sistem digunakan sebagai cadangan.