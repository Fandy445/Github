//Fandy Ali Muzhofi
//Tugas Sanbercode Pekan 3

const prompt = require('prompt-sync')({sigint: true});
const bilangan = prompt('Masukkan bilangan bulat: ');

if(bilangan%2==0){
    hasil = Math.sqrt(bilangan);
    console.log(hasil);
}
if(bilangan<0){
    console.log("Tidak bisa input bilangan negatif")
}
else {
    console.log("Tidak bisa input bilangan ganjil")
}