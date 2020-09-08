var cuadro = document.getElementsByClassName("cuadro");
var puntaje = document.getElementById("puntaje");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var lose = document.getElementById("lose");
var win = document.getElementById("win");

start.addEventListener("click", juego);

for (let i = 0; i < cuadro.length; i++) {
    cuadro[i].addEventListener("mousedown", click);
}

function click() {
    this.style.backgroundColor = "springgreen";
    puntaje.innerHTML = puntaje.innerHTML * 1 + 1;
}

function juego() {
    runLoop();
}

runLoop = async () => {
    puntaje.innerHTML = "0";
    start.removeEventListener("click", juego);
    for (let i = 0; i < 30; i++) {
        await new Promise(resolve => setTimeout(resolve, 700));
        let numero = Math.floor(Math.random() * cuadro.length);
        cuadro[numero].style.visibility = "visible";
        await new Promise(resolve => setTimeout(resolve, 700));
        cuadro[numero].style.backgroundColor = "tomato";
        cuadro[numero].style.visibility = "hidden";
    }
    start.addEventListener("click", juego);
    if (puntaje.innerHTML == 30) {
        win.style.display = "block";
    } else {
        lose.style.display = "block";
    }
    await new Promise(resolve => setTimeout(resolve, 2000));
    win.style.display = "none";
    lose.style.display = "none";
};