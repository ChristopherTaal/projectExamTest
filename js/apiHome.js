//import {baseUrl} from "./settings/api.js"
const containerBox = document.querySelector(".jumbotron-fluid");

const indexUrl = "http://localhost:1337/home/";

async function fetchApi(){
    
        const response = await fetch (indexUrl);
        const results = await response.json();
        console.log(results);
        
        const banner = results.hero_banner.url;
        

        containerBox.innerHTML = ` 
                <img src="http://localhost:1337${banner}" class="img-fluid" alt="...">
        
    `;
   

 }
fetchApi();

