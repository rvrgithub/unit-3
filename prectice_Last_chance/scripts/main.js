async function newApiCall(url){
   try{
    let res = await fetch(url);
    let data =await res.json();
    console.log("data",data);
    return data;
   }
   catch(err){
       console.log("err",err);
   }
}

function appendPicture(data,main){
    data.forEach((element) => {
        let div =document.createElement("div");
        let image =document.createElement("img");
        image.src=element.urlToImage;
        let title =document.createElement("p");
        title.innerText=element.title;
        let desc =document.createElement("p");
        desc.innerText=element.description;
        
        div.append(title,desc,image);
        div.onclick  = ()=>{
            localStorage.setItem("article",JSON.stringify(element))
            console.log(element)
                   };
        main.append(div);

        
    });
}

// const showData= (data) =>{
//     console.log("showData",data)
//     // window.location.href="detail.html"
   
//     }

export {newApiCall,appendPicture}
