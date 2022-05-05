// console.log("Fetch_Data");
let url = "https://fakestoreapi.com/products";

// // let myRequest =fetch(url);

// var container =document.getElementById("container")
// // console.log("myRequest", myRequest);
// // myRequest.then(function(res){
// //     // console.log("res" ,res.json());
// //     return res.json();
// // })
// // .then(function(res){
// //     console.log("res" ,res);
// // })

// // .catch(function(err){
// //     console.log("err",err);
// // })
let cart =localStorage.getItem("cart");
if(!cart){
    cart=[];
    localStorage.setItem("cart",JSON.stringify(cart));
    recartCont(cart);
}
else{
 cart =JSON.parse(cart);
    recartCont(cart);
}

function recartCont(cart){
    let cartCount =document.getElementById("card_count");
    // cartCount.textContent="cart_count"+cart.length;
}
async function getData(){
    try{
        let res =await fetch(url);
    let data =await res.json();
    appenedProduct(data);
    console.log("data" ,data);
    }
    catch(err){
        console.log("err",err);
    }
}
getData();
function appenedProduct(data){
    // console.log("data", data);
    data.forEach(function(el){
        // console.log(data);
        // console.log("el " ,el);
        let div= document.createElement("div");
        let img =document.createElement("img");
        img.src=el.image;
        let title=document.createElement("p");
        title.innerText =el.title;
        let price=document.createElement("p");
        price.innerText =el.price;
        let rating=document.createElement("p");
        let button =document.createElement("button");
        button.onclick=function(event){
                  addToCart(el);
// console.log(el);
        }
      function  addToCart(el){
// console.log(el);
let cart =JSON.parse(localStorage.getItem("cart"));
cart.push(el);
localStorage.setItem("cart", JSON.stringify(cart));
recartCont(cart);
        }
rating.innerText=el.rating;
div.append(img ,title,price,button);
container.append(div);
// console.log("div",div);
// document.querySelector("#container").append(div);
    })
}



// async function getMovie(){
//     let res =await fetch(" http://www.omdbapi.com/?apikey=ea08e62e&t=avengers");
//     let data =await res.json();
//     console.log("data" ,data);

// }
// getMovie();