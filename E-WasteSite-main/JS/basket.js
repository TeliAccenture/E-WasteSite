//Credited to Telisa DP, Accenture Internship, Code First Girls 2022


let html = "";
let oldelem;
let newelem;
let delay = 1000;
let newPrice = 0;
let totalPrice;

let basketArray = await fetch("../JS/products.json").then(response => response.json())
newelem = document.querySelector("#basketContainer");
setTimeout(function populateProducts(basketArray){
    basketArray.forEach(item => { 
      if(item.inBasket){
        totalPrice= document.querySelector("#totalPrice")
        let htmlSegment = ` <li class="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 class="my-0">${item.productTitle}</h6>
          <small class="text-muted">${item.productDescription}</small>
        </div>
        <span class="text-muted">£${item.productPrice}</span>
      </li>`;
      newPrice = item.productPrice + newPrice ;
    
       htmlSegment =  html += htmlSegment;
newelem.innerHTML = htmlSegment;
totalPrice.innerHTML = `£${newPrice}`;
    }
      }
        )
}, delay, basketArray);










