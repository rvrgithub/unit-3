// // console.log("jasPasrt");
// let menu =document.getElementById("menu"); 
// let url ="https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";

// async function getData(){
//     try{
//         let res = await fetch(url);
//         let data =await res.json();
//         console.log("data",data);
//         appendData(data);
//     }
//     catch(err){
//        console.log("err",err);
//     }
// }
// getData();
// var value =[]; 
//  function appendData(data){
//     //  value.push(data);  
// data.forEach(function(el){
//     console.log("el",el.meals);
//        let div =document.createElement("div");
//     let idMeal =document.createElement("p");
//     let img =document.createElement("img");
//     let strMeal =document.createElement("p");
//     idMeal.innerHTML=el.meals.idMeal;
//     strMeal.innerHTML=el.meals.strMeal;
//     img.src =el.meals.strMealThumb;
//     div.append(idMeal,strMeal,img);
//     menu.append(div);
//     });
// }


// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
//         #menu{
//             display: grid;
//             grid-template-columns: 25% 25% 25% 25%;
//         }
//         img{
//             width: 80%;
//         }
//     </style>
// </head>

// <body>
//     <div id="menu"></div>
// </body>

// </html>

// <script>

    let menu = document.getElementById("menu");
    JSON.parse(localStorage.getItem("menuData"))||[];
    menu.innerHTML="";
    let url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";

    async function getData() {
        try {
            let res = await fetch(url);
            let data = await res.json();
            for(var i=0;i<data.meals.length ;i++){
                data.meals[i].price =(Math.random()*500).toFixed(2);
            }
            localStorage.setItem("menuData" ,JSON.stringify(data.meals));
              console.log("datttta",data);
            appendData(data);
        }
        catch (err) {
            console.log("err:", err);
        }
    }
    getData();
   


// count cart button function ..................

let cart =localStorage.getItem("cart");
// console.log(cart);
if(!cart){
    cart=[];
    // console.log("cart" ,cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    refreshCart(cart)
}
else{
    cart= JSON.parse(cart);
    refreshCart(cart)
}
function refreshCart(cart){
let count_cart = document.getElementById("cart_Count");
count_cart.textContent="Cart -" + cart.length;
}



// srot function .......................................
 async function sortPrice(){
     let sortValue =await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian")
    // 
    let sortCriteria =document.getElementById("SortValue").value;
    console.log(sortCriteria);
    if(sortCriteria){
        let updateValue = sortValue.sort(function sortFuncion(a,b){
    if(sortCriteria == "Heigh"){
        return a.price -b.price;
    }
    else if(sortCriteria == "Low"){
        return b.price -a.price;
    }
        });
        console.log(updateValue)
      
    }
    else{
        console.log(updateValue);
    }
}


    function appendData(data) {
       
        data.meals.forEach(function (el) {
            // console.log("el:", el.meals);
            let div = document.createElement("div");
            let idMeal = document.createElement("p");
            let price =document.createElement("p");
            let img = document.createElement("img");
            let strMeal = document.createElement("p");
            let button =document.createElement("button");
            button.innerHTML="AddToCard "
            button.onclick=function(el){
                addToCart(el);
               
            }
// Add to cart function .........................................
            function addToCart(e){
                console.log("el",el);
                let cart =JSON.parse(localStorage.getItem("cart"));
                cart.push(el);
                console.log(cart);
                localStorage.setItem("cart", JSON.stringify(cart));
                refreshCart(cart)
            }
            price.innerHTML =`${el.price} &#8377`;
            idMeal.innerText = el.idMeal;
            strMeal.innerText = el.strMeal;
            img.src = el.strMealThumb;
            div.append(img, price, strMeal, button);
            menu.append(div);
            localStorage.setItem("menuData" ,JSON.stringify(data.meals));
        });
    };



    
// </script>