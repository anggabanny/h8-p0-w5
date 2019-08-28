/*
  /////
  order
  /////
  Function order ini hanya berfungsi mengurutkan number dari kecil ke besar dalam bentuk string
  dan outputnya disatukan dengan satu spasi. Apabila ada angka yang sama selalu urutkan dari paling
  kiri.

  [RULES]
  1. Tidak boleh menggunakan built in function selain .push() dan .unshift()
*/
function order(words) {
  var temp = []
  var final = ''

  for(var i = 0 ; i < words.length; i++){
    if (words[i] != ' ') {
      final+=words[i]
    } else if (words[i] == ' ' && words[i+1] !== ' '){
      temp.push(final)
      final = ''
    }
  }
  temp.push(final)
  
  var selesai = []
  var test = '123456789'
  for(var i = 0 ; i < test.length; i++){
    for(var j = 0 ; j < temp.length; j++){
      for(var k = 0 ; k < temp[j].length; k++){
        if (temp[j][k] == test[i]) {
          selesai.push(temp[j])
        }
      }
    }
  }

  var output = ''
  for(var i = 0 ; i < selesai.length; i++){
    output+=selesai[i] + ' '
  }
  return output
}

console.log(order("is2 Thi1s T4est 3a")) // "Thi1s is2 3a T4est
console.log(order("4of Fo-10r       pe6000ople   g3ood    th5e  the2")) // "Fo-10r the2 g3ood 4of th5e pe6000ople"
console.log(order("i1s Thi0s m2e real1")) // "Thi0s i1s real1 2me"
console.log(order("")) // ""