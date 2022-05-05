




// function Order(event){
//     // event.prevantDefualt();
//         let myOrder = document.getElementById("form").value;
//         console.log("myOrder",myOrder);
//         let status ="open";
//       let food_promise= new Promise(function(resolve,reject){
//         setInterval(function(){
//             if(status=== "open"){
//                 resolve(`${myOrder} It's Your Order......Thanks!`)
//             }
//             else{
//                 reject(`It's time is close "Sorry!"`);
//             }
//         },1000)
//       });
//      food_promise.then(function(res){
//          console.log("res:" ,res);
      
//      });
//      food_promise.catch(function(err){
//          console.log("err:", err);
//      })
    
//     }