const express = require("express");
const app = express();

// Middleware parsing body dari request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Selamat datang di aplikasi web sederhana!");
});

app.get("/about", (req, res) => {
  res.send("Ini adalah halaman tentang kami.");
});

app.get("/perkenalan", (req, res) => {
  res.send("Hai nama saya kevin");
});

// Route menampilkan data dari request POST
app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("Data telah diterima!");
});

// Route menangani halaman yang tidak ditemukan
app.use((req, res) => {
  res.status(404).send("Halaman tidak ditemukan");
});

// Menjalankan server pada port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
