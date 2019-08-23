/**
 * ///////////
 * User Weapon
 * ///////////
 * Function userWeapon adalah sebuah function yang berfungsi merubah senjata dari setiap karakter.
 * Function ini menerima parameter yaitu:
 *  - user = tipe data object, merupakan informasi dari user
 *  - weapon = tipe data string, merupakan senjata yang akan dipakai user
 * Function ini akan mengembalikan tipe data string yang berisi informasi perubahan senjata
 * 
 * [EXAMPLE]
 * Input:
 * - User: {
 *    name: 'yogs',
 *    weapon: 'redKnife',
 *    job: 'swordman',
 *    attack: 700
 *  }
 * - newWeapon: blackKnife
 * Proses:
 * - Apabila heroes tersebut dapat menggunakan weapon yang diminta maka akan diubah senjata
 *   dan menyesuaikan dengan output nilai yang baru. (700 - weaponLama(100) + weapon baru (300)) = 900
 * Output:
 * yogs menggunakan senjata blackKnife attack menjadi 900
 * 
 * [RULES]
 * 1. Dilarang menggunakan built in function kecuali .push() dan .unshift()
 * 2. Asumsi senjata awal pemain selalu ada dan sesuai
 * 3. Apabila ada karakter yang berusaha memakai senjata yang tidak bisa dipakai job tersebut
 *    maka kembalikan Invalid Weapon
 */

/**
 * DAFTAR WEAPONS
 * 
 * | Name           | Type    | Attack |
 * | -------------- | ------- | ------ |
 * | redKnife       | knife   | 100    |
 * | blackKnife     | knife   | 300    |
 * | crimsonSword   | katana  | 800    |
 * | moonLightSword | katana  | 400    |
 * | starKunai      | kunai   | 80     |
 * | huumaShuriken  | kunai   | 340    |
 * | emptyBracer    | knuckle | 20     |
 * | brokenArms     | knuckle | 40     |
 * 
 * 
 * DAFTAR HEROES
 * 
 * | Job      | Weapon Types         |
 * | -------- | -------------------- |
 * | swordman | knife, katana        |
 * | ninja    | knife, kunai, katana |
 * | samurai  | knife, katana        |
 * | monk     | knuckle              |
 */

function userWeapon(user, weapon) {
    var playerName = user.name
    var jobs = user.job
    var DamageAsli = checkWeapon(user.weapon,user.attack)

    var check = ''
    if (jobs == 'swordman') {
        check = ['knife', 'katana']
    } else if (jobs == 'ninja') {
        check = ['knife', 'katana','kunai']
    } else if (jobs == 'samurai') {
        check = ['knife', 'katana']
    } else if (jobs == 'monk') {
        check = ['knuckle']
    }
    
    return endThis(weapon,DamageAsli,check,playerName)
}

function checkWeapon(senjataAwal, damage) {
    var weapon = {
        redKnife :{ type: 'knife', attack:100},
        blackKnife:{ type: 'knife', attack:300},
        crimsonSword :{ type: 'katana', attack:800},
        moonLightSword :{ type: 'katana', attack:400},
        starKunai :{ type: 'kunai', attack:80},
        huumaShuriken :{ type: 'kunai', attack:340},
        emptyBracer :{ type: 'knuckle', attack:20},
        brokenArms :{ type: 'knuckle', attack:40},
    }
    return damage - weapon[senjataAwal].attack
}

function endThis(pilihSenjata, damage, check, name) {
    var weapon = {
        redKnife :{ type: 'knife', attack:100},
        blackKnife:{ type: 'knife', attack:300},
        crimsonSword :{ type: 'katana', attack:800},
        moonLightSword :{ type: 'katana', attack:400},
        starKunai :{ type: 'kunai', attack:80},
        huumaShuriken :{ type: 'kunai', attack:340},
        emptyBracer :{ type: 'knuckle', attack:20},
        brokenArms :{ type: 'knuckle', attack:40},
    }

    var count = 0
    for(var i = 0 ; i < check.length; i++){
        if (check[i] === weapon[pilihSenjata].type) {
            count++
            damage = damage + weapon[pilihSenjata].attack
        }
    }
    if (count == 0) {
        return 'Invalid weapon'
    } else{
        return name + ' menggunakan senjata '+ pilihSenjata +' attack menjadi '+damage
    }
}


var yogs = {
    name: 'yogs',
    job: 'swordman',
    weapon: 'redKnife',
    attack: 700
}
console.log(userWeapon(yogs, 'blackKnife'))
// yogs menggunakan senjata blackKnife attack menjadi 900


var arms = {
    name: 'arms',
    job: 'monk',
    weapon: 'emptyBracer',
    attack: 3000
}
console.log(userWeapon(arms, 'crimsonSword'))
// Invalid weapon


console.log(userWeapon({
    name: 'yuss',
    job: 'ninja',
    weapon: 'huumaShuriken',
    attack: 900
}, 'starKunai'))
// yuss menggunakan senjata starKunai attack menjadi 640