import { getCurrentItem } from "../utils/favFunction.js";
const favourites = getCurrentItem();
const container= document.querySelector(".articles");

if (favourites.length === 0){
    container.innerHTML = "No favourites article/s added yet";
}

favourites.forEach ((favourite) => {
    container.innerHTML += `<div class="arty">

    <h4>${favourite.title}</h4>
    <h4>${favourite.author}</h4>
    <h4>${favourite.summary}</h4><i class="fas fa-star"></i></div>`
});

const eraseButton = document.querySelector(".button");
    eraseButton.addEventListener("click", erase);
    function erase(){
        if (favourites.length !==0){
        localStorage.clear();
        container.innerHTML ="";
        }
}