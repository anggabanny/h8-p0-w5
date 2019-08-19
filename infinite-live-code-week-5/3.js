/*
============
rapotAsrama
============
rapotAsrama adalah sebuah fungsi yang menerima parameter berupa array of object.
Function akan menerima sebuah parameter array of object dengan format:

  [
    { nama: <nama murid>, nilai: <nilai murid>, asrama: <nama asrama>},
    { nama: <nama murid>, nilai: <nilai murid>, asrama: <nama asrama>},
    ...
  ]

Data di atas merupakan campuran seluruh nilai murid dari asrama manapun.

Function akan memproses array of object tersebut untuk membuat sebuah rapot dalam bentuk array of object dengan format:

  [
    { asrama: <nama asrama>, lulus: <array berisi nama murid yg lulus>, gagal: <array berisi nama murid yg gagal> },
    { asrama: <nama asrama>, lulus: <array berisi nama murid yg lulus>, gagal: <array berisi nama murid yg gagal> },
    ...
  ]

Data yang diharapkan merupakan akumulasi murid yang lulus dan tidak dari setiap asrama.
Standard kelulusan adalah minimum 70.

*/

function rapotAsrama(students) {
  for(var i = 0; i < students.length; i++){
    for(var j = 0; j < students.length-1; j++){
      if (students[j].asrama > students[j+1].asrama) {
        var temp = students[j].asrama
        students[j].asrama = students[j+1].asrama
        students[j+1].asrama = temp
      }
    }
  }

  var penampung = [[],[],[]]
  for(var i = 0; i < students.length; i++){
    if (students[i].asrama == 'Griffindor') {
      penampung[0].push(students[i])
    } else if (students[i].asrama == 'Ravenclaw') {
      penampung[1].push(students[i])
    } else if (students[i].asrama == 'Slyterin') {
      penampung[2].push(students[i])
    }
  }

  var final = []
  for(var i = 0 ; i < penampung[0].length; i++){
      var tempG = {
        asrama : penampung[0][i].asrama,
        gagal : [],
        lulus : []
      }
      
      if (penampung[0][i].nilai <=70) {
        tempG.gagal.push(penampung[0][i].nama)
      } else if (penampung[0][i].nilai > 70) {
        tempG.lulus.push(penampung[0][i].nama)
      }
  }
  final.push(tempG)

  for(var i = 0 ; i < penampung[1].length; i++){
    var tempf = {
      asrama : penampung[1][i].asrama,
      gagal : [],
      lulus : []
    }
    
    if (penampung[1][i].nilai <=70) {
      tempf.gagal.push(penampung[0][i].nama)
    } else if (penampung[1][i].nilai > 70) {
      tempf.lulus.push(penampung[1][i].nama)
    }
  }
  final.push(tempf)

  for(var i = 0 ; i < penampung[2].length; i++){
    var temph = {
      asrama : penampung[2][i].asrama,
      gagal : [],
      lulus : []
    }
    
    if (penampung[2][i].nilai < 70) {
      temph.gagal.push(penampung[0][i].nama)
    } else if (penampung[2][i].nilai >= 70) {
      temph.lulus.push(penampung[2][i].nama)
    }
  }

  final.push(temph)

  return final
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

console.log(rapotAsrama(data));

/* 
[
  {
    asrama: 'Griffindor',
    gagal: ['Dean Thomas', 'Ginny Weasley'],
    lulus: ['Harry Potter']
  },
  {
    asrama: 'Ravenclaw',
    gagal: ['Cho Chang', 'Penelope Clearwater'],
    lulus: []
  },
  {
    asrama: 'Slyterin',
    gagal: ['Gregory Goyle'],
    lulus: ['Pansy Parkinson', 'Tom Marvolo Riddle']
  }
]
*/
