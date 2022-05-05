async function getdata(url){
    try{
     let res = await fetch(url)
 
     let data = await res.json()
 
     return data
    }
    catch(e){
        console.log(e)
    }
 }
 
 //getdata("")
 
 function appendData(data, location){
     data.forEach((el) => {
 
         let div = document.createElement("div")
 
         let p = document.createElement("p")
         p.innerHTML = el.title
 
         let img = document.createElement("img")
 
         img.src = el.image
 
         div.append(img,p)
 
         location.append(div)
     })
 
 }
 
 export{getdata, appendData}