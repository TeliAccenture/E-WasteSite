//Credited to Telisa DP, Accenture Internship, Code First Girls 2022

let html = '';
let products;
let oldelem;
let newelem;
    fetch("./Products.JSON").then(response => response.json()).then(data => console.log(data))
    
    
    .then(
    JSON.parse(products).forEach(product => {
        let htmlSegment = `<div id = "productCard" class = "productCard">
        <img src = "${product.productImage}" class="productImg">
        <h4 class="cardTitle"> ${product.productName}</h4>
        <h4 class="cardTitle"> ${product.productPrice}</h4>
        </div>`;

        html += htmlSegment;
    })    
    ).then(
 oldelem = document.querySelector("script#productContainer") )
    .then( newelem = document.createElement("div"))
    .then(newelem.innerHTML = htmlSegment)
    .then(oldelem.parentNode.replaceChild(newelem,oldelem))
       
 


