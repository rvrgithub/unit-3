import navbar from "./components/nav.js";
let navbar_box=document.getElementById("nav_bar");
navbar_box.innerHTML= navbar();
console.log("hello")


async function translateText(){
    try{
    let input =document.getElementById("input-text").value;
    let res =await fetch("https://libretranslate.de/translate",{
method:"POST",
body: JSON.stringify({
q:input,
source:"en",
target:"ko",
format:"text",
}),

headers:{
    // accept: "application/json",
    // "Content-Type": "application/x-www-form-urlencoded",
    "Content-Type": "application/json"
},
    });
    let data =await res.json();
    console.log("data",data);
    document.getElementById("translated-text").innerText=data.translatedText;
}catch (err){
    console.log("err",err);
}}

document.getElementById("ranslate-btn").addEventListener("click", translateText);

