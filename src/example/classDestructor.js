// Makhluk Hidup
    // Bernafas
    // Berkembang biak

    // Tinggal di bumi
    // Bernyawa

// class MakhlukHidup {
//     constructor(_nafas, _tinggal, _nyawa){
//         this.bernafas = _nafas,
//         this.tempatTinggal = _tinggal,
//         this.bernyawa = _nyawa
//     }

//     berkembang(){
//         console.log('Sedang berkembang')
//     }
// }

// Manusia
    // Akal
    // Uang

    // Cari Uang
// class Manusia extends MakhlukHidup {
//     constructor(_nafas, _tinggal, _nyawa){
//         // constructor milik MakhlukHidup
//         super(_nafas, _tinggal, _nyawa)

//         this.akal = true,
//         this.uang = true
//     }

//     cariUang(){
//         console.log('Cari Uang')
//     }
// }

// let human = new Manusia("nafas", "bumi", "punya")

// console.log(human)
// human.berkembang()
// Hewan
    // Insting

    // Berburu

// Tumbuhan
    // Sabar

    // Fotosintesis

    // let andi = {
    //     nama: 'Andi Pahlevi',
    //     age: '32',
    //     job: 'Pembalap',

    //     balapan: () => { console.log('Sedang balapan') }
    // }

let person = {
    real: {
        name: "aldi",
        job: "pembalap",
        email: "aldi@gmail.com"
    },
    fake: {
        name: "Steve",
        job: "CEO"
    }
}

let {name, job, email} = person.real

console.log(name)
console.log(job)
console.log(email)


























// class Users {
//     constructor(_nama, _umur, _pekerjaan){
//         // Properties
//         this.nama = _nama,
//         this.age =  _umur,
//         this.job = _pekerjaan
//     }

//     // Function
//     balapan(){
//         console.log('Sedang balapan')
//     }
// }

// let andi = new Users("Andi Pahlevi", 32, "Pembalap")
// let budi = new Users("Budi", 29, "Penari")

// console.log(andi.nama)
// andi.balapan()

// console.log(budi.nama)
// budi.balapan()