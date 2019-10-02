// Falsy value adalah sebutan untuk sebuah nilai yang akan di anggap sebagai niai false
    // false
    //  0
    // empty string / ( "" , ''  )
    // null
    // undefined
    // NaN


// if (" ") {
//     console.log( 'T R U E')
// }

let angkas = [1, 2, 3, 4, 0]

// Return true or false
    // Jika yang di return adalah true, maka value akan disimpan
    // Jika yang di return adalah false, maka value tidak akan disimpan

    // return angka % 2 === 0
    // 1 , false
    // 2, true
    // 3, false
    // 4, true
    // 0, true

    // if(angka % 2 === 0) { return angka }
    // 1, false
    // 2, true
    // 3, false.
    // 4, true
    // 0, false

let hasil = angkas.filter((angka) => {
    return angka % 2 === 0

})

// [  ]

console.log(hasil)