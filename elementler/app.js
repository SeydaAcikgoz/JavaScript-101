//Dinamik Olarak Element Oluşturmak
const cardBody = document.querySelectorAll(".card-body")[1];
const link = document.createElement("a");
link.id="goBlogWebSite";
link.className="btn btn-dark btn-sm mt-3";
link.href="http://enesbayram.net";
link.target="_blank";
link.innerHTML = "Kişisel Websiteme Git";

cardBody.appendChild(link);

/*ORNEK
<li class="list-group-item d-flex justify-content-between">Todo 3
<a href="#" class="delete-item">
    <i class="fa fa-remove"></i>
</a>
</li>
*/
const todoList = document.querySelector(".list-group");
const todo = document.createElement("li");
const todoLink = document.createElement("a");
const i  = document.createElement("i");

todo.className="list-group-item d-flex justify-content-between";
todo.innerHTML = "Todo 5";

todoLink.href="#";
todoLink.className="delete-item";

i.className="fa fa-remove";

todoLink.appendChild(i);
todo.appendChild(todoLink);
todoList.appendChild(todo);

console.log(link);

//Element Silme 
const todoList = document.querySelector(".list-group");
const todos = document.querySelectorAll(".list-group-item");
todos[0].remove();  //ilk todo silindi
todos[todos.length-1].remove();  //son todo silindi
todoList.removeChild(todos[1]);
