import {getCurrentItem} from "../utils/favFunction.js";
import {handleClick} from "./script.js";


export function renderSearch(rends){
    const peyborit = getCurrentItem();

    const resultContainer = document.querySelector(".articles");

rends.forEach(function(ids){
    let styleCss = "far";

    const doesObjectExist = peyborit.find(function(favs){
        return parseInt(favs.id) === ids.id;
    });
 
    if(doesObjectExist){
        styleCss = "fas";
    }
    resultContainer.innerHTML += `<div class="arty">
                        <h4>${ids.title}</h4>
                        <h4>${ids.author}</h4>
                        <h4>${ids.summary}</h4>
                        <i class="${styleCss} fa-star" data-title="${ids.title}" data-author="${ids.author}" data-summary="${ids.summary}"></i></div>`;   
                          
    });
    const clickButton = document.querySelectorAll(".arty i");
    clickButton.forEach((press) => {
        press.addEventListener("click", handleClick);
    });
}


