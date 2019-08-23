function jumlahRekursif(data) {
    var temp = 0
    if (data.length == 1) {
        if (data[0] % 2 != 0) {
            return -data[0]
        } else if (data[0] % 2 == 0){
            return data[0]
        }
    } else {
        if (data[0] % 2 != 0) {
            temp = -data[0]
        } else if (data[0] % 2 == 0){
            temp = data[0]
        }
        return temp + jumlahRekursif(data.slice(1))
    }
}

console.log(jumlahRekursif([1,2,6,5,3,7,5])) //-13
console.log(jumlahRekursif([1,6,6,1,3,7,5,5,3,7,5])) //-25
console.log(jumlahRekursif([2,5,4,3,6,7,4,3,5,3,8,6])) //4