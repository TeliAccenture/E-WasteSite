//Credited to Telisa DP, Accenture Internship, Code First Girls 2022


let html = '';
let oldelem;
let newelem;


let productsArray = await fetch("../JS/products.json").then(response => response.json())
console.log(productsArray)
// function populateProducts(){
//     productsArray.forEach(product => {
//         let htmlSegment = `<div id = "product" class="productCard">
//         <h2 class="formTitle">${product.productImage}</h2>
//         <img src = "${product.productImage}" alt = "product image" height = "250px" width = "250px">
//         <p id = "productDescription" class="formText" >${product.productDescription}</p>
//         <p id = "price" class="formText">${product.productPrice}</p>
//         <button class="normalButton">Add to Cart</button>
//     </div>`;

//         html += htmlSegment;
//     })
// newelem = document.querySelector("#productGallery");
// newelem.innerHTML = htmlSegment;
// console.log(htmlSegment)
// }

// populateProducts();


 


