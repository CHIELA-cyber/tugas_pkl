//Ini soal 1 - Data Mahasiswa
let nama        = "Andi";
let umur        = 21;
let jurusan     = "Sistem Informasi";
let statusaktif = true;

console.log("Nama:", nama);
console.log("Umur:", umur);
console.log("Jurusan:", jurusan);
console.log("Aktif:", statusaktif);


//Ini Soal 2 - Hitung Belanja
let hargaBarang = 25000;
let jumlahBarang = 4;
let totalSebelumDiskon = hargaBarang * jumlahBarang;
let diskon = totalSebelumDiskon * 0.10;
let totalBayar = totalSebelumDiskon - diskon;

console.log("Total sebelum diskon:",totalSebelumDiskon);
console.log("Diskonnya:",diskon);
console.log("Total bayar:", totalBayar);


let nilai = 85;

if (nilai >= 90) {
  console.log("Grade: A");
} else if (nilai >= 80) {
  console.log("Grade: B");
} else if (nilai >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}


for (let i = 1; i <= 5; i++) {
  console.log("Perulangan ke-" + i);
}


let buah = ["Apel", "Mangga", "Jeruk", "Pisang"];

console.log("Jumlah buah:", buah.length);

for (let i = 0; i < buah.length; i++) {
  console.log("Buah ke-" + (i + 1) + ": " + buah[i]);
}


function sapa(nama) {
  return "Halo, " + nama + "! Selamat belajar JS!";
}

console.log(sapa("Ashley"));
console.log(sapa("Andi"));

function tambah(a, b) {
  return a + b;
}

console.log("Hasil tambah 5 + 3 = " + tambah(5, 3));


let mahasiswa = {
  nama: "Ashley",
  umur: 21,
  jurusan: "Sistem Informasi",
  hobi: ["Ngoding", "Makan", "Tidur"]
};

console.log("Nama mahasiswa:", mahasiswa.nama);
console.log("Jurusan:", mahasiswa.jurusan);
console.log("Hobi ke-2:", mahasiswa.hobi[1]);
console.log("Total hobi:", mahasiswa.hobi.length);


document.getElementById("tombol").addEventListener("click", function() {
  document.getElementById("judul").innerText = "ASHLEY UDAH BISA JAVASCRIPT MPRUYYYY! 🔥";
  console.log("Tombol di klik!");
});


let jumlahKlik = 0;
let listWarna = ["#ffc0cb", "#add8e6", "#90ee90", "#fffacd", "#e6e6fa"];

document.getElementById("tombol").addEventListener("click", function() {
  jumlahKlik = jumlahKlik + 1;
  document.getElementById("judul").innerText = "ASHLEY UDAH BISA JAVASCRIPT MPRUYY ASOYY! 🔥";
  document.getElementById("hitung").innerText = jumlahKlik;
  
  // Ganti warna background
  let warnaBaru = listWarna[jumlahKlik % listWarna.length];
  document.body.style.backgroundColor = warnaBaru;
  
  console.log("Tombol di klik ke-" + jumlahKlik + " warna: " + warnaBaru);
});