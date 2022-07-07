const express = require("express");
const path = require("path");

const app = express();

app.use(middleware)

function middleware(req, res, next){
  var time = new Date(2022, 5, 23, 9).getHours();
  var day = new Date(2022, 5, 23).getDay();

  if(time > 7 && time < 17){
    if (day > 0 && day < 6 ){
      next();
    }
    
  }else{res.send("<h2>Website is not available on weekend. Checkback on monday by 9:00am</h2>")}
}

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res)=>{
  res.render("index")
});

app.get("/service", (req, res)=>{
  res.render("service")
});

app.get("/contact", (req, res)=>{
  res.render("contact")
});

app.listen(3000, function(){
  console.log("starting server on port 3000")
});
