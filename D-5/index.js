

// concept -1.......
// let h2= document.getElementById("count");
// function counter(){
//     var  i=0;
//     let x = setInterval(function(){
//         i =i+1;
//         h2.textContent=i;
//         // console.log("i" , i);
//         if(i==10){
//             clearInterval(x);
//         }
//     },1000)
// }
// counter();



// conscept 2nd...
// custum slid window

function storeImages(){
    let img =document.getElementById(`url`).value;
    let image =localStorage.getItem(`image`);
    console.log(`image:`, image);
    if(image === null){
        image =[];
    }

    // there data is allready in localstorage
    else{
        image = JSON.parse(localStorage.getItem(`image`));
    }
    image.push(img);
    localStorage.setItem(`image`,JSON.stringify(image));
}