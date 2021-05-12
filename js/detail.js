const detailsContainer = document.querySelector(".productDetail");

const queryString = document.location.search;

const urlParams = new URLSearchParams(queryString);

const id = urlParams.get("productId");

console.log(id);

const urlProduct = "http://localhost:1337/products/" + id;
console.log(urlProduct );

async function getProduct() {
    try{
        const response = await fetch(urlProduct);
        const details = await response.json();
    
        console.log(details);
    
        createNew(details);
    }
    catch(error){
        console.log(error);
        detailsContainer.innerHTML = message("error", error);
    }
}
getProduct();

            function createNew(details){
                detailsContainer.innerHTML = `
                        <div class="detail justify-content-center">
                         <div class="container overflow-hidden">        
                            <div class="p-3 bg-light  d-flex justify-content-center"> 
                                <div class="card" style="width: 18rem;">
                                    <div class="card-body">
                                        <h5 class="card-title">${details.title}</h5>
                                        <p class="card-text">${details.description}</p>
                                        <img src="http://localhost:1337${details.image.url}" class="card-img-top" alt="product">
                                        <p class="card-text">Price: ${details.price}</p>                                    
                                    </div>
                                    <button><a href="cart.html?cartPrice">buy</a></button>
                                </div>
                            </div>                      
                         </div>
                        </div>
                        `;
            }





            //from javaMA med filter

            import {getCurrentItem} from "./utils/favFunction.js";
import {displayMessage} from "./utils/displayMessage.js";
import {searchInput} from "./products/inputDetails.js";

const baseUrl = "http://localhost:1337/articles";
const container = document.querySelector(".articles");              
const search = document.querySelector(".search");

async function getUrl(){
   try{
    const response = await fetch (baseUrl);
    const result = await response.json();
    const peyborit = getCurrentItem();


    let filteredArticles = result;

    filteredArticles.forEach(function(ids){
        let styleCss = "far";

        const doesObjectExist = peyborit.find(function(favs){
            //console.log(favs);
            return parseInt(favs.id) === ids.id;
        });
     //   console.log(doesObjectExist);
     
        if(doesObjectExist){
            styleCss = "fas";
        }
        container.innerHTML += `<div class="arty">
                            <h4>${ids.title}</h4>
                            <h4>${ids.author}</h4>
                            <h4>${ids.summary}</h4>
                            <i class="${styleCss} fa-star" data-title="${ids.title}" data-author="${ids.author}" data-summary="${ids.summary}"></i></div>`;   
                              
        });
           //I was trying to connect make filter function here...
        search.addEventListener("click", searchInput);
        
        const clickButton = document.querySelectorAll(".arty i");
        clickButton.forEach((press) => {
            press.addEventListener("click", handleClick);
        });

   } catch (error){
       console.log(error);
       displayMessage("error", error, ".articles")
   }
}
getUrl();


//function upon clicking the icon
export function handleClick(){

    this.classList.toggle("far");
    this.classList.toggle("fas");

    const title = this.dataset.title;
    const author = this.dataset.author;
    const summary = this.dataset.summary;

    const existingFavs = getCurrentItem();

    const artyExist = existingFavs.find(function (favs){
        return favs.title===title;
    });

    if(artyExist === undefined){
        const arty = {author:author, title:title, summary:summary};
        existingFavs.push(arty);
        saveFavs(existingFavs);
    }
    else{
        const newFavs = existingFavs.filter(favs => favs.title !== title);
        saveFavs(newFavs);
    }
}

function saveFavs(fav){
    localStorage.setItem("favourites", JSON.stringify(fav));
}