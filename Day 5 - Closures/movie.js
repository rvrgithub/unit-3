console.log("Movie");
let key="https://api.themoviedb.org/4/list/1?api_key= ea08e62e&Content-Type: application/json;charset=utf-8"

async function getData(){
    try{
        let res = await fetch(key);
        let data = await res.json();
        console.log("data",data);
    }
    catch(err){
        console.log("err",err);
    }
}

// getData();

// async function getData(){
//     let res = await
// }