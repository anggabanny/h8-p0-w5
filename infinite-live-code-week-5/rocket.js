/*
============
rankingAsrama
============

rankingAsrama adalah sebuah fungsi yang menerima parameter berupa array of object dengan format:

[
  { nama: <nama murid>, nilai: <nilai murid>, asrama: <nama asrama>},
  { nama: <nama murid>, nilai: <nilai murid>, asrama: <nama asrama>},
  ...
]

Data di atas merupakan campuran seluruh nilai murid dari asrama manapun.

Function akan mengeluarkan output informasi asrama dengan peringkat pertama berdasarkan nilai rata-rata penghuninya.


[EXAMPLE]

* INPUT *
[
  { nama: 'Harry Potter', nilai: 80, asrama: 'Griffindor' },
  { nama: 'Cho Chang', nilai: 60, asrama: 'Ravenclaw' },
  { nama: 'Pansy Parkinson', nilai: 70, asrama: 'Slyterin' },
  { nama: 'Dean Thomas', nilai: 50, asrama: 'Griffindor' },
  { nama: 'Ginny Weasley', nilai: 10, asrama: 'Griffindor' },
  { nama: 'Gregory Goyle', nilai: 10, asrama: 'Slyterin' },
  { nama: 'Penelope Clearwater', nilai: 10, asrama: 'Ravenclaw' },
  { nama: 'Tom Marvolo Riddle', nilai: 90, asrama: 'Slyterin' },
];

* PROCESS *
Setelah menghitung rata-rata dari setiap asrama diperoleh data
- Griffindo memperoleh rata-rata 47
- Ravenclaw memperoleh rata-rata 35
- Slyterin memperoleh rata-rata 57
Jadi asrama dengan rata-rata tertinggi adalah Slyterin

* OUTPUT *
Asrama peringkat pertama adalah Slyterin dengan nilai rata-rata 57


[NOTES]
  - angka rata-rata dibulatkan keatas.
  - Diasumsikan tidak ada asrama dengan rata-rata nilai yang sama.

*/

function rankingAsrama(students) {
  var GriffindorTotal = 0
  var RavenclawTotal = 0
  var SlyterinTotal = 0
  var Arr = [0,0,0]
  var ArrLength = [0,0,0]


  for(var i = 0; i < students.length; i++){
    if (students[i].asrama == 'Griffindor') {
      Arr[0] += Number(students[i].nilai)
      ArrLength[0]++
    } else if (students[i].asrama == 'Ravenclaw') {
      Arr[1] += Number(students[i].nilai)
      ArrLength[1]++
    } else if (students[i].asrama == 'Slyterin') {
      Arr[2] += Number(students[i].nilai)
      ArrLength[2]++
    }
  }

  for(var i = 0; i < Arr.length; i++){
    if (i == 0) {
      GriffindorTotal = Math.round(Arr[i]/ArrLength[i])
    } else if (i == 1){
      RavenclawTotal = Math.round(Arr[i]/ArrLength[i])
    } else if(i == 2){
      SlyterinTotal = Math.round(Arr[i]/ArrLength[i])
    }
  }
  
  if (GriffindorTotal > RavenclawTotal && GriffindorTotal > SlyterinTotal) {
    return 'Asrama peringkat pertama adalah Griffindor dengan nilai rata-rata ' + GriffindorTotal
  } else if (RavenclawTotal > GriffindorTotal && RavenclawTotal > SlyterinTotal) {
    return 'Asrama peringkat pertama adalah Ravenclaw dengan nilai rata-rata ' + RavenclawTotal
  } else if (SlyterinTotal > GriffindorTotal && SlyterinTotal > RavenclawTotal) {
    return 'Asrama peringkat pertama adalah Slyterin dengan nilai rata-rata ' + SlyterinTotal
  }
}

var data = [
  { nama: 'Harry Potter', nilai: 80, asrama: 'Griffindor' },
  { nama: 'Cho Chang', nilai: 60, asrama: 'Ravenclaw' },
  { nama: 'Pansy Parkinson', nilai: 70, asrama: 'Slyterin' },
  { nama: 'Dean Thomas', nilai: 50, asrama: 'Griffindor' },
  { nama: 'Ginny Weasley', nilai: 10, asrama: 'Griffindor' },
  { nama: 'Gregory Goyle', nilai: 10, asrama: 'Slyterin' },
  { nama: 'Penelope Clearwater', nilai: 10, asrama: 'Ravenclaw' },
  { nama: 'Tom Marvolo Riddle', nilai: 90, asrama: 'Slyterin' },
];

console.log(rankingAsrama(data)) // Asrama peringkat pertama adalah Slyterin dengan nilai rata-rata 57