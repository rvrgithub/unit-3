function navbar(){
    return `   <div id="nav">
    <div>
      <img src="https://images.apilist.fun/the_meal_db_api.png" alt="">
    </div>
    <div id="right">
        <div  onclick="window.location.href='index.html'" id="home">Home</div>
        <div  onclick="window.location.href='random.html'"  id="meal">Meal recipe</div>
        <div  onclick="window.location.href='random.html'">Random</div>
      
        
        <input type="text" placeholder="search" id="search">
        <button id="btn">Search</button>
    </div>
   
</div>`

}
export default navbar;