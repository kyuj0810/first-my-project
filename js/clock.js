const clock = document.querySelector("h2#clock");


function getCLock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hour}:${minutes}:${second}`;
    //clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getCLock();
//setTimeout(getCLock,5000);
setInterval(getCLock,1000)