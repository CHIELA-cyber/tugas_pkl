//soal 10
const produk = [
  { nama: "Mouse", harga: 50000 },
  { nama: "Keyboard", harga: 100000 },
  { nama: "Monitor", harga: 1500000 },
  { nama: "Headset", harga: 200000 }
];

const keranjang = [
  { nama: "Mouse", jumlah: 2 },
  { nama: "Keyboard", jumlah: 1 },
  { nama: "Headset", jumlah: 1 }
];

function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

let subtotal = 0;

console.log("========= STRUK PEMBELIAN =========");

for (let i = 0; i < keranjang.length; i++) {
  const item = keranjang[i];
  const dataProduk = produk.find(p => p.nama === item.nama);
  const subtotalProduk = dataProduk.harga * item.jumlah;
  subtotal += subtotalProduk;
  console.log(item.nama + " x" + item.jumlah + " " + formatRupiah(subtotalProduk));
}

console.log("-----------------------------------");

let diskon = 0;
if (subtotal > 500000) {
  diskon = subtotal * 0.1;
}

const total = subtotal - diskon;

console.log("Subtotal " + formatRupiah(subtotal));
console.log("Diskon " + formatRupiah(diskon));
console.log("Total " + formatRupiah(total));
console.log("===================================");
console.log("Terima kasih!");