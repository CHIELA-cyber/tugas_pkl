//soal 2
const hargaBarang = 25000;
const jumlahBarang = 4;
const persenDiskon = 10;

const totalSebelumDiskon = hargaBarang * jumlahBarang;
const besaranDiskon = totalSebelumDiskon * persenDiskon / 100;
const totalSetelahDiskon = totalSebelumDiskon - besaranDiskon;

console.log("Total sebelum diskon: Rp" + totalSebelumDiskon);
console.log("Diskon 10%: Rp" + besaranDiskon);
console.log("Total pembayaran: Rp" + totalSetelahDiskon);
