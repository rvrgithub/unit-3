document.querySelector("#home").addEventListener("click" , function(){
    window.location.href="index.html";
});
document.querySelector("#login").addEventListener("click" , function(){
    window.location.href="login.html";
});
document.querySelector("#signup").addEventListener("click" , function(){
    window.location.href="signup.html";
});


// slide show .............................
var imgObj = [
    {
      imgUrl: "https://i.ytimg.com/vi/0n7llXgSn4U/maxresdefault.jpg",
    },
    {
      imgUrl:
        "https://sm.ign.com/t/ign_in/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_epch.1080.jpg",
    },
    {
      imgUrl:
        "https://i.pinimg.com/736x/d1/3a/d5/d13ad50397ecbb4144d6a714846d0415.jpg",
    },
    {
      imgUrl:
        "https://c8.alamy.com/comp/PXNB40/matrix-original-movie-poster-PXNB40.jpg",
    },
  ];

var x;
    // let image_arr =JSON.parse(localStorage.getItem("arr"));
    // console.log("img", image_arr)
    // let slide_img = document.getElementById(`slide_img`) ;

let i=0;
 x=  setInterval(function(){
   if(i === imgObj.length){
       i=0;
   }
   var img = document.getElementById(`slide_img`)
    slide_img.src= imgObj[i].imgUrl;
    console.log("img",img)
    i=i+1;
    // console.log("1",i);
 },1000)
    


//  movie Data............


var movieData =[
   { image: "https://i.insider.com/5ca3d2b892c8866e8b4618d9?width=750&format=jpeg&auto=webp",
    name:"Avengers",
    about:"Action & Fantasy ",
    rating:"5",
   },

{
    image:"https://m.media-amazon.com/images/I/71+ErYFAApL._SY550_.jpg",
    name:" Dora and the Lost City of Gold",
    rating:"4.5",  
    about:"funny & Drama ",
},
  {
      image:"https://stat2.bollywoodhungama.in/wp-content/uploads/2021/12/Radhe-Shyam-009-480x270.jpg",
      name:"Radhe Shyam",
      rating:"5",
      about:"Action & Drama",
  },

  {
      image:"https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/ant_man_ver5.jpg",
      name:"Ant-Man",
      rating:"4.8",
      about:"Action & Adventure ",
  },
  {
    image:"https://pbs.twimg.com/media/EeeZDDOUMAEUfkO?format=jpg&name=small",
    name:"Raksha Bandhan",
    rating:"5",
    about:"Drama & femily ",
},
{
    image:"https://i0.wp.com/dthhelper.com/wp-content/uploads/2021/12/captian-india.png?resize=473%2C554&ssl=1",
    name:"Captain India",
    rating:"4.8",
    about:"Action & Adventure ",
},

 
  {
      image:"https://thenewsmen.co.in/public/upload/news/unnamed__7_.0.jpg",
      name:"Zack Snyder's",
      rating:"3.9",
      about:"Action & Adventure ",
  },
  {
      image:"https://lh3.googleusercontent.com/-V9UVWajVs3c/YI68FiVat2I/AAAAAAAAG4A/W8e_E1GUUhIVx3WYKC4jN3faUz4DPogNgCLcBGAsYHQ/s1600/1619966923617582-0.png",
      name:"Jumanji",
      rating:"4",
      about:"Drama & Adventure ",
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcZaPO0kf92P8J_6ZH_dgfp4RP9D-fmV_80w&usqp=CAU",
    name:"Venom 2",
    rating:"4",
    about:"Action & crime ",
},
]
 localStorage.setItem("moviesDataBase",JSON.stringify(movieData));
// movieData=JSON.parse(localStorage.getItem("moviesDataBase"))||[];

console.log(movieData);
  movieData=JSON.parse(localStorage.getItem("moviesDataBase"))||[];
function display(movieData){
    document.querySelector("#movieDiv").innerHTML="";
    // movieData=JSON.parse(localStorage.getItem("moviesDataBase"))||[];
   movieData.map(function(el){
       // div1.innerHTML="";
    var div1 =document.createElement("div");
    // div1.innerHTML="";
    var div2 =document.createElement("div");
    var img =document.createElement("img");
    img.setAttribute("src",el.image);
    var p1 =document.createElement("p");
    p1.textContent=el.name;
    var p2 =document.createElement("p");
    p2.textContent=el.rating;
var p3 =document.createElement("p");
p3.textContent=el.about;
    var tag_div = document.createElement("div");
    tag_div.setAttribute("id","tag_div")
    var tagImg =document.createElement("img");
    tagImg.setAttribute("id","tagImg");
    tagImg.setAttribute("src","https://image.shutterstock.com/image-vector/starwhitevector-260nw-621141281.jpg");
tag_div.append(p2,tagImg);
div2.append(p1,p3, tag_div);
div1.append(img,div2);
document.querySelector("#movieDiv").append(div1);

})
}
display(movieData)
function sortRating(){

    console.log("movieData",movieData);
    var rating =document.querySelector("#SortValue").value;
    console.log(rating);
    if(rating == "High"){
        movieData.sort(function(a,b){
            return Number(a.rating)- Number(b.rating);
        });
        // display(movieData)
        // document.querySelector("#movieDiv")
    }
    if(rating =="Low"){
        movieData.sort(function(a,b){
            return Number(b.rating)- Number(a.rating);
        });
        // display(movieData)
        // document.querySelector("#movieDiv")
    }
    display(movieData);
}


