// const welcome = function () {
//     console.log('Hello World!');
// }

// const welcome = (name) => 'Hello ' + name


// console.log(welcome('Integer'));

// const fungsi1 = (callback1, callback2) => {
//     console.log('Hallo');
//     callback1();
//     callback2();
// }

// const fungsi2 = () => {
//     console.log('Neophyte');
// }

// const fungsi3 = () => {
//     console.log('Integer');
// }

// fungsi1(fungsi2, fungsi3);

const arry = [1,2,3,4,5,6];
// const arrayBaru = arry.map((value) => value*2);
// console.log(arrayBaru);

// const arrayFilter = arry.filter((value) => value > 1)

// const arrayObject = [
//     {
//         namaMotor: 'A',
//         Merk: 'Yamaha',
//         Tahun: '2010'
//     },
//     {
//         namaMotor: 'B',
//         Merk: 'Honda',
//         Tahun: '2010'
//     },
//     {
//         namaMotor: 'C',
//         Merk: 'Yamaha',
//         Tahun: '2012'
//     },
//     {
//         namaMotor: 'D',
//         Merk: 'Toyota',
//         Tahun: '2011'
//     }
// ];

// const tamp = arrayObject.filter((motor) => {
//     if(motor.Merk == 'Yamaha'){
//         return motor.namaMotor;
//     }
// })
// console.log(tamp);



// const motor = 
// console.log(arrayFilter);

// const arrayFind = arry.find((value) => value < 1)
// console.log(arrayFind);

// const mpl = ['rrq', 'evoemwang', 'altergo', 'onic', 'persib'];
// const lolos = mpl

// let array = [1,2,3,4,5];
// let newArray = [...array, 6,7]
// console.log(newArray);

// const array = [1,2,3];
// let a, b, c;
// [a, b, c] = array;
// console.log(a, b, c);

// const mobil = {
//     roda: 4,
//     warna: 'Merah'
// };

// let {jumlahRoda, warnaMobil} = mobil;
// console.log('Jumlah Roda Mobil: ' + jumlahRoda);
// console.log('Warna Mobil: ' + warnaMobil);

// const nama = false;
// // let paramNama = nama ?? '';
// // paramNama == null ? console.log('Error') : console.log('Berhasil ' + paramNama);


// const mobil = {
//     warna: {
//         dua: 'jingga'
//     }
// };

// console.log(mobil.warna.dua);
// console.log(mobil.warna?.satu);


// setTimeout(() => {
//     console.log('Nadong Hepeng');
// }, 2000)

// let a = 0;
// const time = setInterval(() => {
//     a++;
//     console.log('Duitku Banyak');
//     if(a>5){
//         clearInterval(time)
//     }
// },2000)

// const promise1 = new Promise((berhasil, gagal) => {
//     setTimeout(() => {
//         berhasil('Alhamdulillah Berhasil');
//     }, 2000)
// })

// promise1.then((respon) => {
//     console.log(respon);
// })

// const promise2 = new Promise((berhasil, gagal) => {
//     setTimeout(() => {
//         const time = 2;
//         if(time % 2 == 0){
//             berhasil('Detik adalah genap: ' + time)
//         }else {
//             gagal('Detik bukan genap: ' + time)
//         }
//     }, 2000)
// })

// promise2
// .then((respon) => {
//     console.log(respon);
//     console.log('then');
// })
// .catch((err) => {
//     console.log(err);
//     console.log('catch');
// })


// async function fungsiAsync () {
//     return 'Kurniawan';
// }

// const namee = await fungsiAsync();
// console.log(namee);

// const ret = () => {
//     return 'Hello';
// }

// const app = ret();
// console.log(app, 'ini app');

const wait = (delay) => new Promise(berhasil => setTimeout(berhasil,delay));

const time = async () => {
    await wait(2000).then(() => console.log('Mama'))
    console.log('Papa');
}
time();

