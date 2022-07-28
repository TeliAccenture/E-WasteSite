//Credited to Telisa DP, Accenture Internship, Code First Girls 2022


let html = "";
let oldelem;
let newelem;
let delay = 1000;
let buttons;


let productsArray = await fetch("../JS/products.json").then(response => response.json())
newelem = document.querySelector("#storeContainer");
setTimeout(function populateProducts(productsArray){
    productsArray.forEach(product => { 
        let htmlSegment = `<div class="col">
        <div class="card mb-4 rounded-3 shadow-sm" >
                <div class="card-header py-3">
                <h4 class="my-0 fw-normal">${product.productTitle}</h4>
              </div>
              <div class="card-body">
                  <ul class="list-unstyled mt-3 mb-4">
                    <div class="productCard">
                               
                                 <img src = "${product.productImage}" alt = "product image" height = "250px" width = "250px">
                                 <p id = "productDescription" class="my-0 fw-normal" >${product.productDescription}</p>
                                 <h2>£${product.productPrice}</h2>
                            </div>
                  </ul>
                  <button id=${product.productID} type="submit" class="btn w-100 btn-lg btn-success">Add to Basket</button>
                </div>
            </div>
            </div>`;
       htmlSegment =  html += htmlSegment;
newelem.innerHTML = htmlSegment;
    })
   init(); 
   
}, delay, productsArray);

//initialise buttons on page
function init(){
  let buttons = document.querySelectorAll(".btn")
  addToCartHandler(buttons)
}


function addToCartHandler(buttons){
  buttons.forEach(button => {
 
    button.addEventListener("click", e => {

      productsArray.forEach(product => {
        if(product.productID === button.id){
          product.productID = true;

          console.log(product.productID)
        }
         
      }) 
      
    })
  })
 
}



