  
  
  
  let queue =["Shyam","Raju", "Bahubhaiya","Pablo"];
  function Ragister(){
      let name = document.getElementById("name").value;
queue.push(name);
let message =`${name} your registration is succsefully, cheers!`;
alert(message); 
let promise = new Promise(function(resolve,reject){
 let x = setInterval(function(){
    if(queue[0] === name){
        resolve(`${name} its Your turn now`);
        clearInterval(x)
    }
 },1000)
});

promise.then(function(res){
    console.log("res:" ,res);
});
  }

  function Vaccination_Inprogress(){
      if(queue.length-1==0){
          clearInterval(id);
      }
      queue.shift();
      console.log("queue:",queue)
  }
 var id= setInterval( Vaccination_Inprogress,2000)



