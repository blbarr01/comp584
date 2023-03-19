let productList = []; 

$(document).ready(()=>{
    console.log("init complete");
fetch('https://dummyjson.com/products') //return http request object
.then(res => res.json())  // convert request to json obj
.then(data => data.products) // return an array of product objects 
.then((products)=>{loadContainer(products); return null;})
.catch((error)=> console.error(error)); 


console.log($(".col-1"));




});



function loadContainer(products){
    let gi = 0; 
    let singlecols = Object.values($(".col-1")); 
    let doublecols = Object.values($(".col-2"));
    let SandD =  [...singlecols, ...doublecols];
    console.log(SandD);
    console.log(products);
    
    const renderProducts = (container, count) =>{
        container.forEach(col => {
            for (let index = 0; index < count; index++) {
                content = `
                <div class="product-card">
                <img src="${products[gi].images[0]}" alt="">
                <h3 class="product-name"> ${products[gi].title}:<span> $ ${products[gi].price}</span> </h3>
                <p class="product-desc">${products[gi].description}</p>
                </div>   
                `;
                $(col).append(content);
                gi++; 
            }
        });
    }

    renderProducts(singlecols, 2);



    console.log(products);
    console.log(cols);





}