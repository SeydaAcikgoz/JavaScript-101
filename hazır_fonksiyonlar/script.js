var isim="Seyda";
document.writeln(typeof isim);
document.writeln(typeof(isim));

//eval():parametre olarak yazılan kodu çalıştırmak için kullanılır
var deger1=10;
var deger2=40;
var sonuc1 = "deger1+deger2";
var sonuc2 = eval("deger1+deger2");
document.write(sonuc1);
document.write(sonuc2);
function deneme(){
    document.write("Merhaba");
}
var komut = eval("deneme()");


//trim(): karakter dizisinin başındaki ve sonundaki boşluk karakterlerini siler.
var ornek="     Javascript  "
var icerik="Egitim Seti"
document.writeln(ornek+icerik);
alert(ornek + icerik);
var sonuc = ornek.trim();
alert(sonuc);

//slice():kendisine verilecek olan parametreler ile tanımlanmış değişken içeriği aralığında bulunan değerleri kopyalayarak yeni bir içerik oluşturur ve oluşturduğu değeri geriye döndürür.
var icerik="Seyda Acikgoz";
document.write(icerik);
var icerik2 = icerik.slice();
document.write(icerik2);
var icerik3 = icerik.slice(10);
document.write(icerik3);
var icerik4 = icerik.slice(1,5);
document.write(icerik4);

//substring():kendisine verilecek olan parametreler ile tanımlanmış değişken içeriği aralığında bulunan değerleri kopyalarak yeni bir içerik oluşturur ve oluşturduğu değeri geri döndürür.
var metin = "Javascript Egitim Seti";
document.write(metin);
var metin2 = metin.substring(5);
document.write(metin2);
var metin3 = metin.substring(1,5);
document.write(metin3);
var metin4 = metin.substring(5,1);
document.write(metin4);
//metin3==metin4

//substr():kendisine verilecek olan parametreler ile tanımlanmış değişken içeriği aralığında bulunan değerleri kopyalarak yeni bir içerik oluşturur ve oluşturduğu değeri geriye döndürür.
var metin="Javascript dünya üzerinde kullanılan en yaygın script dilidir.";
var sonuc=metin.substr();
document.write(sonuc);
var sonuc = metin.substr(11);//11.karakterden sonrasını al
document.write(sonuc);
 var sonuc = metin.substr(11,5);//11.karakterden başla 5 karakter yaz
document.write(sonuc);
var sonuc = metin.substr(-11);//sondan 11 karakteri al
document.write(sonuc);
