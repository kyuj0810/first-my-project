// const loginForm = document.getElementById("login-form");
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("#login-form a");
const greeting = document.querySelector("#gretting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function goLink(event) {
    event.preventDefault();
    console.log(event);
}

function onLoginSubmit(event) {
    event.preventDefault(); // 어떤 event의 기본 행돈이든지 발생되지 않도록 막는것.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings();
}
  
function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    gretting.innerText = `Hello ${username}`;
    gretting.classList.remove(HIDDEN_CLASSNAME);

}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);    
    // show the form
} else {
    paintGreetings()
}