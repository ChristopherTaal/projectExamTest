const containerBox = document.querySelector(".productStrapi");
const url = "http://localhost:1337/products/";

function addToCartButtonEvent(){
   let buttons = document.getElementsByClassName("cartBtn");
   for (let i = 0; i< cartContents.length; i++){
        console.log([i]);
   }

}

function addToCart(productId){
    let cartContents = localStorage.getItem('cartDetails');
    if (cartContents == undefined) {
     let cart = [ {
     productId: productId,
     quantity: 1 
    }];
    localStorage.setItem('cartDetails', cart);
    }
    else {
        let match = cartContents.find(O => O.productId == productId);
        if(match== undefined){
            let cartEntry =  {
                productId: productId,
                quantity: 1 
            };
            cartContents.push(cartEntry);
            localStorage.setItem('cartDetails', cartContents);
        }
        else{
            for(let i= 0; i< cartContents.length; i++){
                let cartEntry=cartContents[i];

                if (cartEntry.productId == productId) {
                    cartEntry.quantity = cartEntry.quantity + 1;
                    alert('Item has been added to cart')
                }
            }
        }
     // update cartContents
    }
}

async function getApi(){

        const response = await fetch (url);
        const results = await response.json();
        containerBox.innerHTML = "";

      
        for (let i=0; i<results.length; i ++){
            console.log(results[i].image.url);
            containerBox.innerHTML += ` 
            <div class="product justify-content-center">
                <div class="container overflow-hidden">        
                    <div class="p-3 bg-light  d-flex justify-content-center"> 
                        <div class="card" style="width: 18rem;">
                          <img src="http://localhost:1337${results[i].image.url}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${results[i].title}</h5>
                                <p class="card-title">Price: ${results[i].price}</p>
                                <button>

                                <input type="button" class="cartBtn"value="Add to Cart" />
                                <a href="detail.html?productId=${results[i].id}" class="btn ">See details..</a>
                                
                                </button>          
                           </div>
                       </div>
                   </div>
               </div>
            </div>        
        `;
        }
        addToCartButtonEvent();  
 }
getApi();


