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
