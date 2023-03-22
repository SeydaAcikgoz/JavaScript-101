let kilo = Number(prompt("Kilonuzu giriniz:"));//İfade string olarak alınacağı için number tipine çevirdik
let boy = Number(prompt("Boyunuzu metre cinsinden giriniz:"));

let sonuc = kilo / (boy ** 2);
console.log(sonuc);
if (sonuc < 18.5) {
    console.log("İdeal kilonun altında.");
} else if (sonuc >= 18.5 && sonuc <= 24.9) {
    console.log("İdeal kilonun altında.");
} else if (sonuc > 24.9 && sonuc <= 29.9) {
    console.log("İdeal kiloda.");
} else if (sonuc > 29.9 && sonuc < 39.9) {
    console.log("İdeal kilonun çok üstünde(obez).");
} else if (sonuc >= 40) {
    console.log("İdeal kilonun çok üstünde(morbid obez).");
}