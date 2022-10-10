const input = document.querySelector("input");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");

const toogleThemeMode = () =>{

    body.classList.toggle("dark");
}

input.onchange = toogleThemeMode;