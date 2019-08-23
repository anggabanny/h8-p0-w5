/*
  ///////////
  diagonAlley
  ///////////
  Function diagonAlley adalah sebuah function yang membentuk tulisan dalam bentuk diagonal dan
  membentuk bingkai kotak seperti pada test cases. function ini akan menerima parameter string, dan
  function ini berfungsi hanya untuk menampilkan.

  [EXAMPLE]
  INPUT: non
  OUTPUT: 
    |-n
    |o|
    n-|

  NOTES:
    - word membentuk diagonal
    - tepi bingkai horizontal disambung dengan -
    - tepi bingkai vertical disambung dengan |
    - Ukuran bingkai sesuai dengan panjang karakter yang diberikan.
    - Minimal panjang karakter yang diinput adalah 3. Tampilkan 'Invalid input' jika kondisi ini tidak terpenuhi.
*/

function diagonAlley(word) {
  if (word.length < 3) {
    return 'Invalid input'
  } else {
    var panjang = word.length-1
      for(var i = 0 ; i < word.length; i++){
          var temp = ''
          var inti = panjang - i
          for(var j = 0 ; j < word.length; j++){
              if (j != inti && (j == 0 || j == word.length-1)) {
                  temp+='|'
              } else if (j!= inti) {
                  temp+='-'
              } else {
                  temp+=word[inti]
              }
          }
          console.log(temp);
      }
  }
}
// TEST CASES

diagonAlley('kuroko')
/*
  |----k
  |---u|
  |--r-|
  |-o--|
  |k---|
  o----|
*/
console.log('')

// diagonAlley('non')
/*
  |-n
  |o|
  n-|
*/
console.log('')

// diagonAlley('basuke')
/*
  |----b
  |---a|
  |--s-|
  |-u--|
  |k---|
  e----|
*/
console.log('')

// diagonAlley('no')
// Invalid input