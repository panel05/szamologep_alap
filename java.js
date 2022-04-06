var szam = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
window.addEventListener("load", init);

function $(elem) {
  return document.querySelector(elem);
}

function ß(elem) {
  return document.querySelectorAll(elem);
}

function ID(elem) {
  return document.getElementById(elem);
}

function init() {
  let txt = "";
  for (let i = 0; i < szam.length; i++) {
    txt = txt + "<button>" + szam[i] + "</button>";
  }

  $(".szamok").innerHTML = txt;
  for (let index = 0; index < szam.length; index++) {
    ß(".szamok button")[index].addEventListener("click", kijelzo);
  }
  
}

function kijelzo() {
  console.log(event.target);
  $(".kijelzo").innerHTML += event.target.innerHTML;
}

function torol(){
    if(event.target.innerHTML == "C"){
        $(".kijelzo").innerHTML = "";
    }
}
