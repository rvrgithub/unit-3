
// let url =;
async function makeAPiCall(url){
    try{
        let res =await fetch(url)
        let data  =await res.json();
        return data;
    }
    catch(err){
        console.log("err",err);
    }}
function appendPicture(data ,parent){
    data.forEach((element) => {
        // console.log("data",data);
        let div =document.createElement("div");
        let image =document.createElement("img");
        let name =document.createElement("p");
        image.src =element.urls.small;
        name.innerText =element.user.name;
        // let title =document.createElement("p");
        // title.innerText=element.title;
        div.append(image,name)
        // console.log("div",div)
    
        parent.append(div);
     
    });
}

export {makeAPiCall,appendPicture}
