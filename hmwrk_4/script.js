let productList = []; 

$(document).ready(()=>{

fetch('https://dummyjson.com/products') //return http request object
.then(res => res.json())  // convert request to json obj
.then(data => data.products) // return an array of product objects 
.then((products)=>{loadContainer(products)})
.catch((error)=> console.error(error)); 

});



function loadContainer(products){
    // the global index helps me parse throught the array of products accross calls 
    let gi = 0; 
    let singleCols = Object.values($(".col-1")); 
    let doubleCols = Object.values($(".col-2"));
    let trippleCols = Object.values($(".col-3"));
    let quatrainCols = Object.values($(".col-4"));
    
    const renderProducts = (container, count) =>{
        console.log(container);
        console.log(count);
        for (let index = 0; index < container.length - 2; index++) {
            for(let j = 0; j <count; j++ ){
                content = `
                <div class="product-card">
                    <img src="${products[gi].images[0]}" alt="${products[gi].title}">
                    <div class="product-details"> 
                        <h3 class="product-name"> ${products[gi].title}:<span> $ ${products[gi].price}</span> </h3>
                        <p class="product-desc">${products[gi].description}</p>
                    </div>   
                </div>   
                `;
                gi++; 
                $(content).appendTo(container[index]);
            }
        }
    }

    renderProducts(singleCols, 1);
    renderProducts(doubleCols, 1);
    renderProducts(trippleCols, 1);
    renderProducts(quatrainCols, 1);

}