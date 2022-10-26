"use strict";
/* Consegna:
Dato un array contenente una lista di cinque immagini, 
creare un carosello come nello screenshot allegato.

MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo 
il container e inseriamo un'immagine grande al centro: 
avremo così la struttura base e gli stili pronti per poterci
poi concentrare solamente sull'aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte 
le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for 
che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà
una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider 
stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, 
che quindi verrà visualizzata al posto della precedente.

BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima
immagine e l'utente clicca la freccia per andare all’immagine precedente, 
dovrà comparire l’ultima immagine dell’array e viceversa.*/

const itemsContainer = document.querySelector(".items-container");
const arrowUp = document.getElementById("arrow-up");
const arrowDown = document.getElementById("arrow-down");
const images = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg"
];

for (let i = 0; i < images.length; i++) {
    let imgBox = document.createElement("div");
    imgBox.classList.add("item");

    let imgItem = document.createElement("img");
    imgItem.src = images[i];
    imgBox.append(imgItem);

    itemsContainer.append(imgBox);
}

let position = 0;
let showImg = document.querySelectorAll(".item");
showImg[position].classList.add("active");

arrowDown.addEventListener("click", function(){
    if(position === showImg.length - 1){
        showImg[position].classList.remove("active");
        position = 0;
        showImg[position].classList.add("active");
    } else {
        showImg[position].classList.remove("active");
        position += 1;
        showImg[position].classList.add("active");
    }
});

arrowUp.addEventListener("click", function(){
    if(position === 0){
        showImg[position].classList.remove("active");
        position = showImg.length - 1;
        showImg[position].classList.add("active");
    } else {
        showImg[position].classList.remove("active");
        position -= 1;
        showImg[position].classList.add("active");
    }
});