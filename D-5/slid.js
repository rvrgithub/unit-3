
// var x;
// function start(){
//     let image_arr =JSON.parse(localStorage.getItem("image"));
//     let slide_img = document.getElementById(`slide_img`);

// let i=0;
//  x=  setInterval(function(){
//    if(i === image_arr.length){
//        i=0;
//    }
//     slide_img.src= image_arr[i];
//     i=i+1;
//     console.log("1",i);
//  },1500)
     
//  }
//  function stop(){
//      clearInterval(x);
//  }



let Api_key = `AIzaSyD05eCYWJTzVUQfo7o0lI8iRawOy_n_HzU`;
const yyyyyyyyyyy = async () => {
    try {


        let res =await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&type=video&key= AIzaSyD05eCYWJTzVUQfo7o0lI8iRawOy_n_HzU&maxResults=50`);


        let data = await res.json();
        console.log(data);
        let videoData = data.items;
        console.log("data", videoData);
        // displayData(videoData);
      } catch (err) {
        console.log("err", err);
      }
    };
    yyyyyyyyyyy();

