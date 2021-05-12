const priceContainer = document.querySelector(".cartSelected");

const newString = document.location.search;

const urlParams = new URLSearchParams(newString);




        const urlPrice= "http://localhost:1337/products/" + id;


            async function getProduct() {
                try{
                    const response = await fetch(urlPrice);
                    const results = await response.json();
                
                    console.log(results );
                
                    createPrice(results);
                }
                catch(error){
                    console.log(error);
                    priceContainer.innerHTML = message("error", error);

                }
            }
            getProduct();

            function  createPrice(cart){
                priceContainer.innerHTML = `
                        <div class="product justify-content-center">
                        <div class="container overflow-hidden">        
                            <div class="p-3 bg-light  d-flex justify-content-center"> 
                                <div class="card" style="width: 18rem;">
                                    <div class="card-body">
                                        <h5 class="card-title">${cart.title}</h5>
                                        <p class="card-text">${cart.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        `;
                        }
