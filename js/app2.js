//const title = document.querySelector(".hello h1");
const title = document.querySelector(".hello:first-child h1");
// hello란 class 내부에 있는 h1을 가지고 올 수 있다는 것을 의미.
// 첫 번째 element만 가져옴.
// querySelectorAll(".hello h1");
//getElementsByClassName("hello")
//


function handleTitleClick() {
    title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick);

//console.dir(title);

//title.innerText = "Hello";