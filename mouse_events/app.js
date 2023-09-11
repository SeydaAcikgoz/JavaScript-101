//MOUSE EVENTLARI

//DOMContentLoaded:sayfa yüklendiğinde çalışan event
/**
 * document.addEventListener("DOMContentLoaded",run);
function run(){
    console.log("Sayfa yüklendi.");
}
*/

//load:sayfa yüklendiğinde çalışan event
/* window.addEventListener("load",run);

 function run(){
   console.log("Sayfa Yüklendi");
 }
*/
//click
/*const cardTitle = document.querySelectorAll(".card-title")[1];
cardTitle.addEventListener("click",run)

function run(e){
    console.log(e.type)
} */

//dblclick
/**const cardTitle = document.querySelectorAll(".card-title")[1];
cardTitle.addEventListener("dblclick", run)

function run(e) {
    console.log(e.type)
} */

//mouseover:mouse üzerine geldiğinde(html elementleri değişirken de tetiklenir)

//mouseout:mouse üzerinden çıktığında

//mouseenter:mouse üzerine geldiğinde(html elementleri değişirken de tetiklenmez) 

//mouseleave:mouse ayrılınca


const cardBody = document.querySelectorAll(".card-body")[1];
cardBody.addEventListener("mouseover", run);
cardBody.addEventListener("mouseout", run);

cardBody.addEventListener("mouseenter", run);
cardBody.addEventListener("mouseleave", run);

function run(e) {
    console.log(e.type);
}

