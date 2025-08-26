const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Dummy data
const COVERAGE = [
  "Jl. Merdeka No.1",
  "Jl. Sudirman No.22",
  "Jl. Diponegoro No.5",
  "Komplek Melati Blok A",
];

const TESTIMONI = [
  { nama: "Andi", pesan: "Internet cepat dan stabil!" },
  { nama: "Siti", pesan: "Harga terjangkau, cocok buat belajar online." },
  { nama: "Budi", pesan: "Support ramah banget." },
];

const HARGA = [
  { paket: "Harian", harga: "Rp 5.000", deskripsi: "Unlimited 24 jam" },
  { paket: "Mingguan", harga: "Rp 20.000", deskripsi: "Unlimited 7 hari" },
  { paket: "Bulanan", harga: "Rp 60.000", deskripsi: "Unlimited 30 hari" },
];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", { COVERAGE, TESTIMONI, HARGA });
});

app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
