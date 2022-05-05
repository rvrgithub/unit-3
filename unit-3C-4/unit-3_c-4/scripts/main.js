async function apiCall(url) {
    //add api call logic here
try{
    let res = await fetch(url);
    let data = await res.json();
    console.log("data",data);
    return data;
}
catch(err){
    console.log("err",err)
}
}

function  appendArticles(articles ,main ) {
 //add append logic here
    articles.forEach(element => {
    let div= document.createElement("div");
 let image =document.createElement("img");
 let title= document.createElement("p");
 title.innerText=element.title;
 div.append(title);
 console.log("div",div)
div.onclick = ()=> {
    localStorage.setItem('article', JSON.stringify(element));
    window.location.href = 'news.html';
}
 main.append(div);
//  console.log("main",main);
 });

};

export { apiCall , appendArticles }


// async function newApiCall(url){
//     try{
//      let res = await fetch(url);
//      let data =await res.json();
//      console.log("data",data);
//      return data;
//     }
//     catch(err){
//         console.log("err",err);
//     }
//  }
 
//  function appendPicture(data,parent){
//      data.forEach((element) => {
//          let div =document.createElement("div");
//          let image =document.createElement("img");
//          image.src=element.urlToImage;
//          let title =document.createElement("p");
//          title.innerText=element.title;
//          let desc =document.createElement("p");
//          desc.innerText=element.description;
         
//          div.append(title,desc,image);
//          div.onclick  = ()=>{
//              localStorage.setItem("article",JSON.stringify(element))
//              console.log(element)
//                     };
//          parent.append(div);
 
         
//      });
//  }
 
//  // const showData= (data) =>{
//  //     console.log("showData",data)
//  //     // window.location.href="detail.html"
    
//  //     }
 
//  export {newApiCall,appendPicture}
 