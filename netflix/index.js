



async function searchMovie(){
    try{
        let movie = document.getElementById("query").value;
    let res=  await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=ea08e62e&s=${movie}`);
    let data = await res.json()
    console.log("data", data);
    console.log(data.Search);


    if(data.Search ===undefined){
        errrfunction();
    }else{
        return data.Search;
    }

    }
    
    catch(err){
        console.log("err" ,err);
    }
    }
    
    
    async function main(){
        let data = await searchMovie();
        console.log("daaaaata",data);
        if(data === undefined){
            return false;
        }
        else{
            console.log("dta",data);
            appendData(data);
        }
    
    }
    
    let movies_div =document.getElementById("movies");
    function appendData(movies){
        
        movies_div.innerHTML=null;
        movies.forEach(function(el){
            let div1 =document.createElement("div");
            let div2 =document.createElement("div");
            let div3= document.createElement("div");
            let img =document.createElement("img");
            let  year =document.createElement("p");
            let p =document.createElement("P");
            let price =document.createElement("p");
            price.innerHTML =`Rating:- ${(Math.random()*8.5).toFixed(1)}`;
            p.innerText =el.Title;
            year.innerHTML =el.Year;
            img.src=el.Poster;  
             div1.append(img,p,year,price);
            movies_div.append(div1);
           });
    }
let funny = document.getElementById("funny");

   function errrfunction(){
    funny.innerHTML="";
 console.log(" its funn time" );
let img = document.createElement("img");
img.src="https://i.gifer.com/K9s.gif"

funny.append(img);
    }
    // errrfunction()