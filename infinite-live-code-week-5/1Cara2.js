/*
=====
Hacktiv Mining
=====

[INSTRUCTIONS]
salesAmount adalah fungsi yang mengambil parameter:
    1. array penjualan/sales hasil tambang dari berbagai macam tambang yang dimiliki oleh perusahaan Hacktiv
    2. nama mineral yang ingin diketahui jumlah salesnya dari semua tambang-tambang tersebut.

Fungsi ini akan me-return jumlah pendapatan dari penjualan suatu mineral. 

Berikut ini adalah daftar mineral beserta harga-harganya:
    - sulfur dengan harga 10
    - silver dengan harga 30
    - malachite dengan harga 50
    - gold dengan harga 50
    - diamond dengan harga 100

[EXAMPLE]
INPUT : 
- hasil tambang: [['silver','silver','gold'], ['gold','malachite']]
- mineral yang dicari nilai penjualannya: gold

PROSES:
1. Ada 2 tambang, tambang pertama menghasilkan [silver,silver,gold] dan tambang kedua menghasilkan [gold,malachite]
2. Di semua tambang perusahaan Hacktiv, terdapat 2 biji hasil tambang gold.
3. Harga gold adalah 50, jadi hasil penjualan gold adalah 2 ⨉ 50 = 100

OUTPUT:
100

[RULES]
1. WAJIB menggunakan algoritma/pseudocode atau -50 poin

*/
// ALGORITMA
// 1. function yang menerima 2 parameter contoh A dan B
// 2. buat variabel untuk nentuin harga sulfur(10), silver(30), malachite(50), gold(50), dan diamond(100)
// 3. buat varibel nampung total harga
// 4. looping parameter ke i sampai A.length
// 5. loopingg lagi ke j sampai A[i].length
// 6. lalu buat kondisi jika B sama dengan 'sulfur' maka total harga di tambah variabel sulfur(10)
// 7. lalu buat kondisi jika B sama dengan 'silver' maka total harga di tambah variabel silver(30)
// 8. lalu buat kondisi jika B sama dengan 'malachite' maka total harga di tambah variabel malachite(50)
// 9. lalu buat kondisi jika B sama dengan 'gold' maka total harga di tambah variabel gold(50)
// 10. lalu buat kondisi jika B sama dengan 'diamond' maka total harga di tambah variabel diamond(100)
// 11. tampilkan total harga

function salesAmount(satu, dua) {
    var hargaSulfur = 10
    var hargaSilver = 30
    var hargasMalachite = 50
    var hargaGold = 50
    var hargaDiamond = 100

    var total = 0
    for (var i = 0; i < satu.length; i++) {
        for (var j = 0; j < satu[i].length; j++) {
            if (satu[i][j] == dua) {
                switch (dua) {
                    case 'sulfur':{ total+=hargaSulfur ;break;}
                    case 'silver':{ total+=hargaSilver ;break;}
                    case 'malachite':{ total+=hargasMalachite ;break;}
                    case 'gold':{ total+=hargaGold ;break;}
                    case 'diamond':{ total+=hargaDiamond ;break;}
                }
            }
        }
    }

    return total
}

var tambangA = [
    ['gold', 'gold', 'gold', 'diamond', 'diamond', 'sulfur'],
    ['sulfur', 'sulfur', 'sulfur', 'diamond', 'diamond', 'gold']
]
console.log(salesAmount(tambangA, 'gold')); // 200

var tambangB = [
    ['gold', 'gold', 'gold', 'diamond', 'diamond', 'sulfur'],
    ['sulfur', 'sulfur', 'sulfur', 'diamond', 'diamond', 'gold'],
    ['sulfur', 'sulfur', 'sulfur', 'diamond', 'diamond', 'gold'],
]
console.log(salesAmount(tambangB, 'diamond')); // 600

var tambangC = [
    [],
    ['sulfur', 'sulfur', 'silver', 'gold'],
    ['gold', 'diamond']
]
console.log(salesAmount(tambangC, 'sulfur')) // 20