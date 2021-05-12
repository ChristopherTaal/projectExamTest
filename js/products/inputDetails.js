import { renderSearch} from "./renderedArticles.js";

export function searchInput(list){

    const search = document.querySelector(".search");

    search.onkeyup = function(event){
       console.log(event);

        const searchValue= event.target.value.trim().toLowerCase();
        const filteredArticle = list.filter(function(search){

            if (search.title.toLowerCase().startsWith(searchValue)){
                return true;
            }
            renderSearch(filteredArticle);
        });    
                                                     
    }
};
   