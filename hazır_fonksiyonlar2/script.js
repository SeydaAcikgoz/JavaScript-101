//search():kendisine parametre olarak verilen değer doğrultusunda değişken içeriğini arayarak ilk eşleşmeyi sağlayan değişken içeriğinin index değerini geriye döndürür.Düzenli ifade alabilir.
var icerik="Javascript dünya üzerinde en yaygın kullanılan script dilidir.";
var sonuc = icerik.search("script");
document.write(sonuc);
sonuc = icerik.search(/Script/i);   //içeriğin büyük-küçük harf olmasına bakmaz
document.write(sonuc + "<br>");

//includes():kendisine parametre olarak verilen değer doğrultusunda değişken içeriğini kontrol ederek boolean veri türünde sonuç döndürür.
var metin ="Javascript eğitim seti";
var metin2=metin.includes("seti");
document.write(metin2 + "<br>");

//startsWith():kendisine parametre olarak verilen değer doğrultusunda değişken içeriğinin başlangıç değerini kontrol ederek boolean veri türünde sonuç döndürür.
metin = "Javascript eğitim seti";
document.write(metin.startsWith("J") + "<br>");
document.write(metin.startsWith("2") + "<br>");

//endsWith():kendisine parametre olarak verilen değer doğrultusunda değişken içeriğinin bitiş değerini kontrol ederek boolean veri türünde sonuç döndürür.
metin = "Javascript eğitim seti";
document.write(metin.endsWith("J") + "<br>");
document.write(metin.endsWith("i") + "<br>");

//match():kendisine parametre olarak verilen değer doğrultusunda değişken içeriğini kontrol eder ve eşleşen değer varsa içeriğin eşleşen kısmından yeni bir içerik oluşturur ve oluşturduğı içeriği geri döndürür.(Düzenli ifade alabilir.)
var icerik="Javascript eğitim seti Eğitim";
sonuc=icerik.match("eğitim");
document.write(sonuc + "<br>");
sonuc = icerik.match("o");
document.write(sonuc + "<br>");
//g : içeriğin tamamı üzerinde çalışılmasını sağlar.(düzenli ifade)
//i : içeriğin büyük/küçük harf olmasına bakmaz.(düzenli ifade)
sonuc = icerik.match(/eğitim/i);
document.write(sonuc+"<br>");
sonuc = icerik.match(/eğitim/g);
document.write(sonuc + "<br>");
sonuc = icerik.match(/eğitim/ig);
document.write(sonuc + "<br>");

//replace():kendisine verilecek olan parametreler doğrultusunda değişken içeriğini kontrol eder ve eşleşen değerlerin sağlayarak yeni bir içerik oluşturur ve oluşturduğu içeriği geriye döndürür.(düzenli ifade alabilir.)
metin="Dünya'da en yaygın olarak kullanılan script dili php'tir.";
document.write(metin + "<br>");
sonuc=metin.replace("php","javascript");
document.write(sonuc + "<br>");

//split():kendisine verilecek olan parametreler doğrultusunda değişken içeriğini bölümleyerek yeni bir dizi oluşturur  ve oluşturduğu içeriği geriye döndürür.(düzenli ifade alabilir.)
metin="Javascript eğitim seti";
document.write(metin + "<br>");
sonuc=metin.split();
document.write(sonuc + "<br>");
sonuc = metin.split("");//karakter karakter bölümler
document.write(sonuc + "<br>");
sonuc = metin.split(" ");
document.write(sonuc + "<br>");
sonuc = metin.split("a");
document.write(sonuc + "<br>");

//localCompare():üzerinde çalışılan değişkene parametrik olarak verilen diğer bir değişken içeriğini tarayıcı diline göre karşılaştırarak sonucu geri döndürür.
//Birinci değişken içeriği ikinci değişken içeriğinden önce geliyorsa -1,eşitse 0,sonra geliyorsa 1 döner.
var icerik1="abc";
var icerik2 = "abd";
document.write(icerik1.localeCompare(icerik2) + "<br>");
document.write(icerik2.localeCompare(icerik1) + "<br>");

//charAt():kendisine parametre olarak verilen değer doğrultusunda değişken içeriğindeki karşılığı olan karakteri bularak geri döndürür.
metin="Seyda Acikgöz";
document.write(metin.charAt(0) + "<br>");
document.write(metin.charAt(7) + "<br>");
document.write(metin.charAt(10) + "<br>");

//charCodeAt():kendisine parametre olarak verilen değer doğrultusunda değişken içeriğindeki karşılığı olan karakteri bularak karakterin UNICODE değerini geriye döndürür.
metin = "Seyda Acikgöz";
document.write(metin.charCodeAt(0) + "<br>");
document.write(metin.charCodeAt(7) + "<br>");
document.write(metin.charCodeAt(10) + "<br>");

//fromCharCode():kendisine parametre olarak verilen UNICODE değerini karakter olarak geriye döndürür.
document.write(String.fromCharCode(45) + "<br>");
document.write(String.fromCharCode(79) + "<br>");
document.write(String.fromCharCode(159) + "<br>");

//encodeURI():değişken içerisindeki metnin özel karaketerlerini UTF-8 kodlamasına dönüştürerek oluşturduğu değeri geri döndürür.
document.write(encodeURI("http://www.extraegitim.com") + "<br>");
document.write(encodeURI("http://www.extraeğıtim.com") + "<br>");
