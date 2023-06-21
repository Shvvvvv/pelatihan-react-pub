const { exec } = require('child_process');

const allRepo = "[05/06/2023 21:03] M. Azriel Pazarudin: https://github.com/azrielpazarudin/tugas-react-3.git[05/06/2023 21:09] Ahmad Faisal: https://github.com/Isal-man/tugas-react-3[05/06/2023 21:10] Anggi: https://github.com/anggipermana111/tugas-react-3[05/06/2023 21:12] Akbar: https://github.com/Ak8388/tugas-3-annur-akbar-bahagia[05/06/2023 21:17] Dimas Firmansyah Pub: https://github.com/fdimas157/pelatihan-react.git[05/06/2023 21:32] Wahyu PUB: https://github.com/kangzBredz04/kebab-case.git[05/06/2023 21:33] Azhari Fahreza Pub: https://github.com/ezalubis/tugas-react-3[05/06/2023 21:41] Putri Lestari Pub: https://github.com/putrilest/react-tugas3[05/06/2023 21:45] Helmi Tris Edyan Pub: https://github.com/helmi0611/tugas-react-3.git[05/06/2023 21:45] Farhan Ramadhan Pub: https://github.com/Framdan14/tugas-react-3.git[05/06/2023 21:49] Ali Pub: https://github.com/hanafiahlubis/tugas-3-react[05/06/2023 21:53] Riyanda: https://github.com/riyandrmd/tugas-react-3.git[05/06/2023 21:53] Agus: https://github.com/agusrahmaan/tugas-react-3.git[05/06/2023 21:54] Naily PUB: https://github.com/naweasleey/tugas-react-3.git[05/06/2023 21:54] Fadli: https://github.com/fadlifathurrahman/tugas-react-3.git[05/06/2023 21:59] Achmad Farhan: https://github.com/AcFaFa/tugas-react-3.git[05/06/2023 21:59] Dede: https://github.com/d-adam-a/tugas-react-3[05/06/2023 21:59] Putri M: https://github.com/pasaribuputri/tugas-react-3[05/06/2023 22:01] Toyyib: https://github.com/toyyibhdr/tugas-react[05/06/2023 22:02] Sawaluddin Pub: https://github.com/Sawaluddin-JR/tugas-react-3.git[05/06/2023 22:03] Andriansyah Pub: https://github.com/Andri0430/tugas-react-3.git[05/06/2023 22:16] Tigana Reymansyah Pub: https://github.com/tiganareymansyah/tugas-pelatihan-react[05/06/2023 22:17] Peni Julianti Pub: https://github.com/penijulianti/tugas-3-react[05/06/2023 22:22] Maulina Pub: https://github.com/Nsyamln/tugas-3.git[05/06/2023 22:33] Kurniawan: https://github.com/Kurniawan-1/tugas-react-3.git[05/06/2023 23:02] Fauzul: https://github.com/dwifauzulahmad/tugas-react-3[05/06/2023 23:07] Achmad Fauzi: https://github.com/ahmaduzi99/tugas-react-3.git[05/06/2023 23:13] Avita PUB: https://github.com/avitadiahsaputri/tugas-3-react[05/06/2023 23:17] Suci: https://github.com/suciamm/tugas-react-3[05/06/2023 23:22] Melani Pub: https://github.com/melaniputri1041/tugas3-react.git[05/06/2023 23:24] Krise: https://github.com/kriserohalia/tugas-react-3[05/06/2023 23:27] Ananda: https://github.com/anandaprtmaa/Tugas-3[06/06/2023 00:06] Wulan: https://github.com/triwulandaribms/tugas3-wulan[06/06/2023 16:19] Aliya Rohaya Siregar Pub: https://github.com/aliyarohayasiregar/tugas-react-3.git[06/06/2023 16:30] Bunga Pub: https://github.com/sariii15/tugas-3.git"
const tes = allRepo.split('[');
const allMurid = tes.map((val) => {
  const tamp = val.split(': ');

  return {
    nama: tamp[0].split('] ')[1],
    linkRepo: tamp[1]
  }
})
allMurid.shift();
const cloneAll = () => {
  allMurid.map((murid) => {
    exec(`cd C:/Pribadi/Pelatihan React/Tugas/Tugas-3 && mkdir "${murid.nama}" && cd "${murid.nama}" && git clone ${murid.linkRepo}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Terjadi kesalahan: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Error: ${stderr}`);
        return;
      }
      console.log(`Berhasil clone tugas Bagas`);
    });
  })
}

// exec(`mkdir "hello mba"`, (err, std, serr) => {
//   if(err){
//     console.log(err);
//   }
//   if(serr){
//     console.log(serr);
//   }
//   console.log('berhasil');
// })

cloneAll();
