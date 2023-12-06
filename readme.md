# Penggunaan .devcontainer untuk Aplikasi Web Node.js dengan Express

Aplikasi web ini dibuat menggunakan Node.js dan Express framework yang memiliki beberapa fitur dasar routing. Tujuan pembuatan project ini adalah menerapkan :
- ### Konsistensi Lingkungan
   Semua anggota tim menggunakan lingkungan pengembangan yang sama.
- ### Isolasi Dependensi 
   Memisahkan dependensi proyek dari lingkungan host.

- ### Konfigurasi yang Mudah
   File .devcontainer memuat semua konfigurasi untuk lingkungan pengembangan.

- ### Kolaborasi yang Lancar
   Fokus pada penulisan kode tanpa khawatir perbedaan konfigurasi.

- ### Integrasi dengan VS Code
   Menjalankan proyek di dalam container dari editor VS Code

.devcontainer sebagai . 

## Cara Menjalankan Aplikasi

1. Pastikan Node.js dan docker telah terinstal.

2. Clone repositori ke dalam folder lokal.

3. Jalankan docker menggunakan wsl

4. Buka terminal/command prompt, arahkan ke folder repo, lalu ketik :
   ```
   code
   ```

5. Buka VSCODE lalu ctrl+shift+p , lalu ketik : 
   ```
   dev containers : reopen in container
   ```

6. Jalankan aplikasi dengan perintah:
   ```
   node app.js
   ```

6. Buka browser dan akses `http://localhost:3000` untuk halaman utama.

## Endpoint

- **GET /**: Halaman utama aplikasi.
- **GET /about**: Halaman tentang kami.
- **POST /submit**: Menerima data dari metode POST.

## Penghentian Server

Untuk menghentikan server, kembali ke terminal/command prompt dan tekan `Ctrl + C`.

## NOTE

Pastikan port yang digunakan (default: 3000) tidak sedang digunakan oleh aplikasi lain.

---
*Created by Kevin Avicenna Widiarto 2023*