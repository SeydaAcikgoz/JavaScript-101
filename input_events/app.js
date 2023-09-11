//İNPUT EVENTLARI

//focus:inputun içine basılınca
//blur:inputtan çıkınca
//copy:inputun içinden bir şeyler kopyalanırsa
//paste:inputun içine bir şeyler yapıştırılınca
//cut:inputun içinden bir şeyler kesilirse
//select:inputun içinden bir şeyler seçilirse

const todo = document.querySelector("#todoName");

todo.addEventListener("focus",run);
todo.addEventListener("blur",run);
todo.addEventListener("copy",run);
todo.addEventListener("paste",run);
todo.addEventListener("cut",run);
todo.addEventListener("select",run);

function run(e) {
    console.log(e.type);
}