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
        return 'tidak ada catatan hasil tes hari ini'
    }

    var tempSatu = []
    var StringSatu = ''
    for(var i = 0; i < scoreRecord.length; i++){
        if (scoreRecord[i] == ',') {
            tempSatu.push(StringSatu)
            StringSatu = ''
        } else {
            StringSatu+=scoreRecord[i]
        }
    }
    tempSatu.push(StringSatu);

    var tempDua = []
    for(var i = 0; i < tempSatu.length; i++){
        var tempTiga = []
        var StringDua = ''
        for(var j = 0; j < tempSatu[i].length; j++){
            if (tempSatu[i][j] == '-') {
                tempTiga.push(StringDua)
                StringDua = ''
            } else {
                StringDua+=tempSatu[i][j]
            }
        }
        tempTiga.push(StringDua)
        tempDua.push(tempTiga)
    }

    var final = []
    for(var i = 0; i < tempDua.length; i++){
        var obj = {
            id : tempDua[i][0],
            name : tempDua[i][0],
            score : tempDua[i][0],
        }
        final.push(obj)
    }
    return final
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