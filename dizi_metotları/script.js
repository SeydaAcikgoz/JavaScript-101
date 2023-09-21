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
