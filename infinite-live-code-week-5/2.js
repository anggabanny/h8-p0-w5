// "use strict"
/*
============
dataSiswa
============

[INSTRUCTIONS]
dataSiswa adalah sebuah fungsi yang menerima parameter berupa string.
String tersebut memiliki format `studentID-nama-nilai`.

Function akan membaca data siswa dari input dan mengubahnya menjadi array of objects.


[NOTES]
1. Apabila tidak ada data tampilkan "tidak ada catatan hasil tes hari ini"


[RULES]
1. Dilarang menggunakan built-in split

*/


function dataSiswa(scoreRecord) {

  if (scoreRecord.length == 0) {
    return "tidak ada catatan hasil tes hari ini"
  }

  console.log(scoreRecord);
  var output = []
  var temp = ''
  for(var i = 0; i < scoreRecord.length; i++){
    if (scoreRecord[i] == ',') {
      output.push(temp)
      temp = ''
    } else{
      temp+=scoreRecord[i]
    }
  }
  output.push(temp)


  var power = []
  for(var j = 0; j < output.length; j++){
    var final = []
    var temp1 = ''
    for(var k = 0 ; k < output[j].length; k++){
      if (output[j][k] == '-') {
        final.push(temp1)
        temp1 = ''
      } else{
        temp1+=output[j][k]
      }
    }
    final.push(temp1)
    power.push(final)
  }

  var finalFinal = []
  for(var i = 0; i < power.length; i++){
    var test = {}
    for(var j = 0 ; j< power[i].length; j++){
      test =  {
        id: power[i][0],
        name: power[i][1],
        score: power[i][2],
      }
    }
    finalFinal.push(test)
  }

  return finalFinal
}

console.log(dataSiswa("001-Radith-88,002-Putra-100,003-Levy-83"))
/* 
[
  { id: '001', name: 'Radith', score: 88 },
  { id: '002', name: 'Putra', score: 100 },
  { id: '003', name: 'Levy', score: 83 }
]
 */

console.log(dataSiswa("001-Radith-5,002-Putra-92,003-Levy-100"))
// /* 
// [
//   { id: '001', name: 'Radith', score: 5 },
//   { id: '002', name: 'Putra', score: 92 },
//   { id: '003', name: 'Levy', score: 100 }
// ]
//  */

console.log(dataSiswa("001-Radith-88,002-Putra-70,003-Levy-65,004-Radinka-88,005-Bagas-90"))
// /* 
// [
//   { id: '001', name: 'Radith', score: 88 },
//   { id: '002', name: 'Putra', score: 70 },
//   { id: '003', name: 'Levy', score: 65 },
//   { id: '004', name: 'Radinka', score: 88 },
//   { id: '005', name: 'Bagas', score: 90 }
// ]
//  */

console.log(dataSiswa("")) // tidak ada catatan hasil tes hari ini