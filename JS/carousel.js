
//Credited to Telisa DP, Accenture Internship, Code First Girls 2022

fetch('../pages/Elements/carousel.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_carousel");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.replaceWith(newelem,oldelem);
})