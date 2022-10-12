// INPUT
const pictures = ["img/01.jpg", "img/02.jpg","img/03.jpg", "img/04.jpg", "img/05.jpg"];
console.log(pictures);
const content = document.querySelector(".content");
console.log(content);
// PROCESSING
// AGGIUNGERE UN CICLO DI IMMAGINI
// CREARE ELEMENTI DINAMICI
for (let i = 0; i < pictures.length; i++) {
const dynamicElement = `<div class="picture">
                        <img src="${pictures[i]}" alt="">
                        </div>`;
content.innerHTML = dynamicElement;
console.log(dynamicElement);
}
// RENDERE VISIBILE LA FOTO SELEZIONATA
const images = document.getElementsByClassName("picture");
let selected = 0;
console.log(selected);
images[selected].classList.add("visible");
console.log(images);
// BOTTONE DI SCORRIMENTO
// SCORRIMENTO IN AVANTI
const downButton = document.getElementById("chevron-down");
downButton.addEventListener ("click", function() {
 if (selected < (pictures.length -1 )) {
    images[selected].classList.remove("visible");
    selected++;
    images[selected].classList.add("visible");

 }
})
