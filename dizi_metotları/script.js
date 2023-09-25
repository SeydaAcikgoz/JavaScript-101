//length metodu
var renkler=["siyah","sarı","beyaz","kırmızı","mavi"];
document.writeln("Dizinin eleman sayisi:"+renkler.length+"<br>");
var renkler2 = ["siyah", "sarı",["lila","lacivert"], "beyaz", "kırmızı", "mavi"];
document.writeln("Dizinin eleman sayisi:" + renkler2.length + "<br>");
document.writeln("Alt dizinin eleman sayisi:" + renkler2[2].length + "<br>");

//delete metodu:index silinmez değeri silinir.
delete renkler[0];
document.writeln(renkler +"<br>");

//pop():dizi içindeki son elemanı siler ve sildiği elemanın değerini geri döndürür.
renkler.pop();
document.writeln(renkler + "<br>");

//shift():dizi içindeki ilk elemanı siler ve sildiği elemanın değerini geri döndürür.
renkler.shift();
document.writeln(renkler+ "<br>");

//push():dizinin sonuna eleman(lar) eklemeyi sağlar.
renkler.push("yeşil");
document.writeln(renkler + "<br>");
renkler.push("turuncu","mor");
document.writeln(renkler + "<br>");

//unshift():dizinin başına eleman(lar) eklemeyi sağlar.
renkler.unshift("turkuaz");
document.writeln(renkler + "<br>");
renkler.unshift("bordo", "pembe");
document.writeln(renkler + "<br>");

//splice():diziden eleman(lar) silmeyi sağlar ve eleman(lar)ı geri döndürür.Aytıca eleman(lar) eklemeyi sağlar.
var meyveler=["elma","armut","kivi","kiraz","muz","ananas"];
meyveler.splice(1,1);//birinci indis değerinden başla 1 eleman sil
document.writeln(meyveler + "<br>");
meyveler.splice(1, 2);
document.writeln(meyveler + "<br>");
meyveler.splice(2);//2.elemandan sonuna kadar sil
document.writeln(meyveler + "<br>");
meyveler.splice(2,0,"karpuz");//2.indise ekle
document.writeln(meyveler + "<br>");
meyveler.splice(2, 0, "kavun","erik");
document.writeln(meyveler + "<br>");
meyveler.splice(0, 1, "avakado");//2.indisten başla 2 tane sil 1 eleman ekle
document.writeln(meyveler + "<br>");

//slice():kendisine verilecek olan parametreler ile tanımlanmış dizi aralığında buku--lunan değerleri kopyalayarak yeni bir dizi oluşturur ve oluşturduğu diziyi geri döndürür.
var sayilar=[1,2,3,4,5,6,7,8,9];
document.writeln(sayilar.slice(1, 5) + "<br>");
document.writeln(sayilar.slice(2,-2) + "<br>");//2.den başla sondan 2.ye kadar al
document.writeln(sayilar.slice(-5, -2) + "<br>");//sondan 5.den başla sondan 2.ye kadar al

//copyWithin():kendisine verilecek olan parametreler ile tanımlanmış dizi aralğındaki değerleri kopyalayarak parametreler doğrultusunda dizinin elemanlarını değiştirir ve dizinin değerini döndürür.(eleman sayısı değişmez)
sayilar.copyWithin(2);//5.indise gelir ve baştan 5.indise kadar olan değerleri ekler
document.write(sayilar+"<br>");
sayilar.copyWithin(5,3);
document.write(sayilar + "<br>"); sayilar.copyWithin(2,3,5);
document.write(sayilar + "<br>");

//fill():kendisine verilecek olan parametreler ile tanımlanmış dizi aralığında bulunan depğer parametreler ile belirtilmiş olan değer doğrultusunda dizi elemanlarını değiştirir ve dizinin değerini geri döndürür.
//1.parametre:değer
//2.parametre:başlangıç indexi
//3.parametre:bitiş indexi
meyveler.fill("portakal",1,3);
document.write(meyveler+"<br>");
meyveler.fill("portakal");//hepsini değiştirir
document.write(meyveler + "<br>");
meyveler.fill("nar",2);//2.indisten sonuna kadar değiştirir
document.write(meyveler + "<br>");

//concat():üzerinde çalışılan diziye parametreik olarak verilen eleman(lar)ı veya dizi(ler)i dahil ederek yeni bir dizi oluşturur ve oluşturulmuş dizi değerini geriye döndürür
var meyve=["elma","armut","çilek"];
var sebze = ["salatalık","domates","patates"];
var fastfood = ["hamburger", "pizza"];
var yiyecek=meyve.concat(sebze);
document.write(yiyecek + "<br>");
yiyecek = meyve.concat(sebze,fastfood);
document.write(yiyecek + "<br>");
yiyecek = meyve.concat("turşu");

//join():dizideki elemanların arasına kendisine paramtere olarak verilen değeri ayraç olarak kullnarak string veri türünde düz bir metin oluştutut ve bu oluşturduğu değeri geriye döndürür.
document.write(renkler + "<br>");
var array = renkler.join();
document.write(array + "<br>");
document.write(typeof array + "<br>");
var array = renkler.join(" ve ");
document.write(array + "<br>");

//toString():dizideki tüm elemanları içeren string veri türünde metin oluşturur ve oluşturduğu değeri geriye döndürür.
document.write(meyve + "<br>");
var array2 = meyve.toString();
document.write(array2 + "<br>");
document.write(typeof meyve + "<br>");
document.write(typeof array2 + "<br>");
document.write(yiyecek + "<br>");

//valueOf():üzerinde çalışılan dizi değerini tam anlamıyla aktarımını sağlayarak yeni bir dizi oluşturur ve dizi değerini geri döndürür.(dizi tam olarak değiştiği için ana dizide yapılan bir değişiklik sonradan oluşan diziyi de etkiler)
var yeni = meyve.valueOf();
document.write(yeni + "<br>");
meyve.fill("nar");
document.write(yeni + "<br>");
document.write(meyve + "<br>");

//indexOf():dizi içerisinde parametrik olarak verilen değeri arar ve ilk eşleşmeyi sağlayan elemanın index değerini geri döndürür.
document.write(sebze + "<br>");
document.write(sebze.indexOf("domates") + "<br>");

//lastIndexOf():dizi içerisinde parametrik olarak verilen değeri arar ve son eşleşmeyi sağlayan elemanın index değerini geri döndürür.
sebze=["salatalık","domates","marul","domates","patates","salatalık"]
document.write(sebze + "<br>");
document.write(sebze.lastIndexOf("domates") + "<br>");
