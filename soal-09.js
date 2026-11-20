//soal 9
const nilaiujian = [75, 90, 60, 85, 95, 70];

let terbesar = nilai[0];

for (let i = 1; i < nilai.length; i++) {
  if (nilai[i] > terbesar) {
    terbesar = nilai[i];
  }
}

console.log("Daftar nilai: " + nilai);
console.log("Nilai terbesar: " + terbesar);

