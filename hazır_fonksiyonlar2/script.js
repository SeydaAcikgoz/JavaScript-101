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

//decodeURI():değişken içerisindeki metnin özel karaketerlerinin UTF-8 kodlamasına dönüştürülmüş karakterlerini çözerek oluşturduğu değeri geri döndürür.
document.write(decodeURI("http://www.extraegitim.com?") + "<br>");
document.write(decodeURI("http://www.extrae%C4%9F%C4%B1tim.com") + "<br>");

//encodeURIComponent():değişken içerisindeki metnin özel karaketerlerini UTF-8 kodlamasına dönüştürerek oluşturduğu değeri geri döndürür.
document.write(encodeURIComponent("http://www.extraegitim.com") + "<br>");
document.write(encodeURIComponent("http://www.extraeğıtim.com") + "<br>");

//decodeURIComponent():değişken içerisindeki metnin özel karaketerlerinin UTF-8 kodlamasına dönüştürülmüş karakterlerini çözerek oluşturduğu değeri geri döndürür.
document.write(decodeURIComponent("http%3A%2F%2Fwww.extraegitim.com") + "<br>");
document.write(decodeURIComponent("http%3A%2F%2Fwww.extrae%C4%9F%C4%B1tim.com") + "<br>");

//escape():değişken içerisindeki metnin özel karakterlerini UNICODE kodlamasına dönüştürerek oluşturduğu değeri geriye döndürür.
deger="Javascrip eğitim seti";
document.write(deger + "<br>");
deger2=escape(deger);
document.write(deger2 + "<br>");
document.write(escape("' + % * - ,") + "<br>");

//unescape():değişken içerisindeki metnin özel karakterlerinin UNICODE kodlamasına dönüştürülmüş karakterlerini çözerek değeri geriye döndürür.
deger = "Javascrip%20e%u011Fitim%20seti";
document.write(unescape(deger) + "<br>");
document.write(unescape("%27%20+%20%25%20*%20-%20%2C") + "<br>");

//toUpperCase():değişken içerisindeki metnin tamamını büyük harf yapar ve değeri geriye döndürür.
metin = "Seyda aCikgoZ";
document.write(metin.toUpperCase()+ "<br>");

//toLowerCase():değişken içerisindeki metnin tamamını küçük harf yapar ve değeri geriye döndürür.
metin = "Seyda aCikgoZ";
document.write(metin.toLowerCase() + "<br>");

//toLocaleUpperCase():değişken içerisindeki metnin tamamını tarayıcı lokasyonuna göre(diline göre) büyük harf yapar ve değeri gerşye döndürür.
metin = "Şeyda aÇIkgöZ";
document.write(metin.toLocaleUpperCase() + "<br>");

//toLocaleLowerCase():değişken içerisindeki metnin tamamını tarayıcı lokasyonuna göre(diline göre) küçük harf yapar ve değeri geriye döndürür.
metin = "Şeyda aÇIkgöZ";
document.write(metin.toLocaleLowerCase() + "<br>");

//sub():değişken içerisindeki metni alt simge metni yaparak değerini geriye döndürür.
var deger1="H";
var deger2 = "2";
var deger2islem =deger2.sub();
var deger3 = "O";
document.write(deger2islem + "<br>");
document.write(deger1+deger2islem+deger3 + "<br>");

//sup():değişken içerisindeki metni üst simge metni yaparak değerini geriye döndürür. 
deger="m";
deger2 = "2";
var deger2islem = deger2.sup();
document.write(deger + deger2islem+ "<br>");

//big():değişken içerisindeki metni büyük fontlu metin yaparak değerini geriye döndürür.
icerik="Javascript";
document.write(icerik+ "<br>");
document.write(icerik.big() + "<br>");

//small():değişken içerisindeki metni kücük fontlu metin yaparak değerini geriye döndürür.
icerik = "Javascript";
document.write(icerik + "<br>");

//bold():değişken içerisindeki metni kalın fontlu metin yaparak değerini geriye döndürür.
icerik = "Javascript";
document.write(icerik + "<br>");
document.write(icerik.bold() + "<br>");
document.write(icerik.small() + "<br>");

//italics():değişken içerisindeki metni italik fontlu metin yaparak değerini geriye döndürür.
icerik = "Javascript";
document.write(icerik + "<br>");
document.write(icerik.italics() + "<br>");

//strike():değişken içerisindeki metni üzeri çizili  metin yaparak değerini geriye döndürür.
icerik = "Javascript";
document.write(icerik + "<br>");
document.write(icerik.strike() + "<br>");

//fixed():değişken içerisindeki metni daktilo fontlu metin yaparak değerini geriye döndürür.
icerik = "Javascript";
document.write(icerik + "<br>");
document.write(icerik.fixed() + "<br>");

//fontcolor():kendisine parametre olarak verilen değer doğrultusunda değişken içerisindeki metni renklendirerek metin yaparak değerini geriye döndürür.(varsayılan renk green)
icerik = "Javascript";
document.write(icerik + "<br>");
document.write(icerik.fontcolor() + "<br>");
document.write(icerik.fontcolor("blue") + "<br>");

//fontsize():kendisine parametre olarak verilen değer doğrultusunda değişken içerisindeki metni font boyutunu değiştirerek metin yaparak değerini geriye döndürür.(1-7 arasında değer verilebilir.)
icerik = "Javascript";
document.write(icerik + "<br>");
document.write(icerik.fontsize() + "<br>");
document.write(icerik.fontsize(1) + "<br>");
document.write(icerik.fontsize(2) + "<br>");
document.write(icerik.fontsize(5) + "<br>");
document.write(icerik.fontcolor("red") + "<br>");
document.write(icerik.fontcolor("#FF9900") + "<br>");
