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
    var newA = []
    var temp = ''
    for(var i = 0 ; i < words.length; i++){
        if (words[i] !== ' ') {
            temp+=words[i]
        } else if(words[i] == ' ' && words[i+1] != ' '){
            newA.push(temp)
            temp = ''
        }
    }
    newA.push(temp)
    
    var final = {}
    for(var k = 0 ; k <= 9; k ++){
        for(var i = 0 ; i < newA.length; i++){
            for(var j = 0 ; j < newA[i].length; j++){
                if (k == newA[i][j]) {
                    if (Number(newA[i][j-1]) == true) {
                        i++
                        break;
                    } else {
                        final[newA[i]] = 'dapat'
                        break;
                    }
                }
            }
        }
    }

    var akhir = ''
    for(var i in final){
        akhir += i + ' '
    }
    return akhir
}

console.log(order("is2 Thi1s T4est 3a")) // "Thi1s is2 3a T4est
console.log(order("4of Fo-10r       pe6000ople   g3ood    th5e  the2")) // "Fo-10r the2 g3ood 4of th5e pe6000ople"
console.log(order("i1s Thi0s m2e real1")) // "Thi0s i1s real1 2me"
console.log(order("")) // ""