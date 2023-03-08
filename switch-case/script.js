var sayi1 = document.getElementById("sayi1");
var sayi2 = document.getElementById("sayi2");

function hesapla(type) {
    var sonuc = "";

    if (type === "+") {
        sonuc = Number(sayi1.value) + Number(sayi2.value);
    }
    else if (type === "-") {
        sonuc = Number(sayi1.value) - Number(sayi2.value);
    }

    else if (type === "*") {
        sonuc = Number(sayi1.value) * Number(sayi2.value);
    }

    else if (type === "/") {
        sonuc = Number(sayi1.value) / Number(sayi2.value);
    }
    document.getElementById("sonuc").innerHTML = sonuc;

}