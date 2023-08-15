//search():kendisine parametre olarak verilen değer doğrultusunda değişken içeriğini arayarak ilk eşleşmeyi sağlayan değişken içeriğinin index değerini geriye döndürür.Düzenli ifade alabilir.
var icerik="Javascript dünya üzerinde en yaygın kullanılan script dilidir.";
var sonuc = icerik.search("script");
document.write(sonuc);
sonuc = icerik.search(/Script/i);   //içeriğin büyük-küçük harf olmasına bakmaz
document.write(sonuc + "<br>");

