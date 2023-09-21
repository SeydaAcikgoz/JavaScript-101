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
