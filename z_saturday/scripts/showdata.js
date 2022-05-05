//getData()
// appendData()

async function getData(url){
    try{
    let res =await fetch(url);
    let data =await res.json();
    return data;
}
catch(err){
    console.log("err" ,err);
}
}

function appendData(data, parent){
data.forEach((el) => {
    let div =document.createElement(`div`);
    let p =document.createElement(`p`);
    p.innerHTML=el.title;
    let img =document.createElement("img");
    img.scr =el.image;
    div.append(img,p);
    parent.append(div);
});
}

export {getData ,appendData};