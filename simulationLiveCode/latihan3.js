function jumlahRekursif(data) {
    if (data.length == 1) {
        return data[0]
    } else {
        return data[0] + jumlahRekursif(data.slice(1))
    }
}

console.log(jumlahRekursif([1,2,6,5,3,7,5])) //-13