// LITERAL
var paragraph = `anggA banny`;
console.log(/[a-z]/.test(paragraph));

// PAKE VARIABEL
var regex = new RegExp('[A-Z]')
console.log(regex.test(paragraph));

// SPLIT
console.log(paragraph.split(/\s/));
// \s = misahin dengan parameter spasi

// REPLACE
console.log(paragraph.replace(/angga/, 'Angga'));

// MATCH mengembalikan nilai tapi hasil akhirnya jadi array
console.log(paragraph.match(/a/));

// G = global mencari diseluruh variabelnya, tapi besar kecilnya tetep harus sesuai
console.log(paragraph.match(/a/g));

// GI = sma seperti G/global, bedanya ga peduli dia besar atau kecil apabila yg di maksud sama ya di ambil
console.log(paragraph.match(/a/gi));

// tanda + di [a-z]+ itu brarti ngambilnya perkata bukan per-abjad, pemisahnya ya kalo ke temu selain abjad 
var string = 'Walaupun regex banyak mengandung simbol, tapi tidak serumit seperti !@#%^%#$*( , ^%&*!!^& dan !#*#$&*@%#';
console.log(string.match(/[a-z]+/gi));
