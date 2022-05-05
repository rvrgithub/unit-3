import navbar from "./components/nav.js";
console.log("navbar:",navbar);

let navbar_div = document.getElementById(`navbar-container`);
navbar_div.innerHTML =navbar();



// let Api_key = `AIzaSyD05eCYWJTzVUQfo7o0lI8iRawOy_n_HzU`;
//   let searchResult = document.getElementById("searchResult");
//   const secachVedio = async () => {
//     try {
//       let userInput = document.getElementById("serchItem").value;
//       let res = await fetch(
//         `https://www.googleapis.com/youtube/v3/search?key=${Api_key}&q=${userInput}$type=video&maxResults=25`
//       );
//       let data = await res.json();
//       let videoData = data.items;
//       console.log("data", videoData);
//       displayData(videoData);
//     } catch (err) {
//       console.log("err", err);
//     }
//   };
//   const displayData = (videosArray) => {
//     searchResult.innerHTML="";
// console.log("videosArray",videosArray);
// videosArray.forEach((video) =>{
// const {id:{videoId},
// } =video;
// let videoCart = document.createElement("div");
// let iframe =document.createElement("iframe");
// iframe.src=`https://www.youtube.com/embed/${videoId}`;
// iframe.setAttribute("allowfullscreen", true);

// videoCart.append(iframe);
// searchResult.append(videoCart);
// console.log()
// })
//   };

//   console.log("hiiiii")