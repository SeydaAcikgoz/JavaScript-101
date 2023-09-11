//KLAVYE EVENTLARI

//keypress : harf ve sayılarda tetiklenen eventtır.basılan tuşu döner
/*document.addEventListener("keypress", run);
function run(e) {
    console.log(e.type);
    console.log(e.key); basılan tuşu verir
    console.log(e.keyCode); basılan tuşun ASCII tablosundaki değerini verir(e.which de aynı)
}
*/


//keydown : bütün tuşlarda çalışır.basılan tuşu döner
// document.addEventListener("keydown",run);

// function run(e){
//   console.log(e.keyCode);
//   if(e.keyCode ==116){
//     alert("Sayfa yenileme engellendi!");
//   }

//   e.preventDefault();    //default olayları kullanma
// }F5 tuşuna basınca sayfa yenileme engellensin


//keyup : tuştan elini kaldırdığında çalışan eventtır.
const cardTitle = document.querySelectorAll(".card-title")[0];
const input = document.querySelector("#todoName");

input.addEventListener("keyup", run);

function run(e) {
    cardTitle.textContent = e.target.value;
}//input a girilenleri tuştan el kalkınca yaz
