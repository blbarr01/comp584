let productList = []; 

$(document).ready(()=>{
    console.log("init complete");
fetch('https://dummyjson.com/products')
.then(res => res.json())  //return http request object
.then(data => data.products) // convert request to json obj
.then(products =>{ console.log(products)})
.catch(()=>console.log("something went wrong"))
});



function renderProducts(products, ){

}