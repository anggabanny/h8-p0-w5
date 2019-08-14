// // NGUBAH HURUF VOCAL
    // PENGKONDISIAN
        // function changeVocals(str) {
        //     var output = '';
        //     for(var i = 0; i < str.length; i++){
        //         if (str[i] == 'a') {
        //             output+='b'
        //         } else if (str[i] == 'i') {
        //             output+='j'
        //         } else if (str[i] == 'u') {
        //             output+='v'
        //         } else if (str[i] == 'e') {
        //             output+='f'
        //         } else if (str[i] == 'o') {
        //             output+='p'
        //         } else if (str[i] == 'A') {
        //             output+='B'
        //         } else if (str[i] == 'I') {
        //             output+='J'
        //         } else if (str[i] == 'U') {
        //             output+='V'
        //         } else if (str[i] == 'E') {
        //             output+='F'
        //         } else if (str[i] == 'O') {
        //             output+='P'
        //         } else {
        //             output+=str[i]
        //         }
        //     }
        //     return output
        // }

    // SWITCH_CASE
        function changeVocals(str) {
            var output = '';
            for(var i = 0; i < str.length; i++){
                switch (str[i]) {
                    case 'a': { output += 'b'; break;}
                    case 'i': { output += 'j'; break;}
                    case 'u': { output += 'v'; break;}
                    case 'e': { output += 'f'; break;}
                    case 'o': { output += 'p'; break;}
                    case 'A': { output += 'B'; break;}
                    case 'I': { output += 'J'; break;}
                    case 'U': { output += 'V'; break;}
                    case 'E': { output += 'F'; break;}
                    case 'O': { output += 'P'; break;}
                    default: { output += str[i] ;break;}
                }
            }
            return output
        }

// // NGEBALIK KATA
    function reverseWord(str) {
        var output = '';

        for(var i = str.length-1; i >= 0; i--){
            output += str[i]
        }
        return output
    }

// // MENGUBAG KECIL KE BESAR DAN SEBALIKNYA
    function setLowerUpperCase(str) {
        var output = ''
        for(var i = 0; i < str.length; i++){
            if (str[i] == str[i].toLowerCase()) {
                output+=str[i].toUpperCase();
            } else {
                output+=str[i].toLowerCase();
            }
        }
        return output
    }

// // MENGHAPUS SPASI DI KALIMAT ATAU KATA
    function removeSpaces(str) {
        var output = '';
        for(var i = 0; i < str.length; i++){
            if (str[i] == ' ') {
            } else {
                output+=str[i]
            }
        }
        return output
    }

// // REKURSIF
    function passwordGenerator(name) {
        if (name.length < 5) {
            return 'Minimal karakter yang diinputkan adalah 5 karakter'
        }

        return changeVocals(reverseWord(setLowerUpperCase(removeSpaces(name))))
    }

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
