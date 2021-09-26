const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");//toDoForm.querySelector("input");
//const toDoInput2 = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // true 이면 값 유지
    saveToDos();
}

function paintToDo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    

    li.appendChild(span);
    li.appendChild(button);
    
    toDoList.appendChild(li);
    
    
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id:Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

function sayHello (item) {
    console.log("this is the turn off",item);
}

const savedToDo = localStorage.getItem(TODOS_KEY);

if(savedToDo) {
    const parseToDos = JSON.parse(savedToDo);
    toDos = parseToDos;
    parseToDos.forEach(paintToDo);   
}

