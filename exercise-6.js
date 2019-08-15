function meleeRangedGrouping(str) {

    // pisah berdasarkan koma
    var strBaru = [];
    var tempSementara = ''
    for(var i = 0; i < str.length; i++){
        if (str[i] == ',') {
            strBaru.push(tempSementara)
            tempSementara = ''
        } else {
            tempSementara += str[i]
        }
    }
    strBaru.push(tempSementara)

    // pisah berdasarkan pembatas di masing2 index
    var strBaru2 = []
    for(var j = 0; j < strBaru.length; j++){
        var penampungArray = []
        var tempSementara2 = ''
        for(var k = 0; k < strBaru[j].length; k++){
            if (strBaru[j][k] == '-') {
                penampungArray.push(tempSementara2)
                tempSementara2 = ''
            } else {
                tempSementara2 += strBaru[j][k]
            }
        }
        penampungArray.push(tempSementara2)
        strBaru2.push(penampungArray)
    }

    // Pengelompokan
    var ranged = []
    var melee = []
    var output = []
    for(var l = 0; l < strBaru2.length; l++){
        if (strBaru2[l][1] == 'Ranged') {
            ranged.push(strBaru2[l][0])
        } else if (strBaru2[l][1] == 'Melee'){
            melee.push(strBaru2[l][0])
        }
    }

    if (str.length == 0) {
        return output
    } else {
        output.push(ranged,melee)
        return output
    }
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []