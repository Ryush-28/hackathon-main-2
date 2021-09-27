const express=require("express");
const bodyParser=require("body-parser");
const app=express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function (req,res) {
  res.render("main");
});

app.get("/vol",function (req,res) {
  res.render("vol");
})
app.get("/medical",function (req,res) {
  res.render("medical");
});
app.get("/patient",function (req,res) {
  res.render("patient");
})

app.post("/",function(req,res){
  // res.redirect("/");
  let city= req.body.city;
  let locality=req.body.locality;
  console.log(city);
  console.log(locality);
});

app.post("/vol",function (req,res) {
  console.log(req.body);
  var ab = req.body.ayush;
  console.log(ab);
  res.redirect("/");

});
app.post("/medical",function (req,res){
  console.log(req.body);
  res.redirect("/");

});
app.post("/patient",function (req,res) {
  console.log(req.body);
  res.redirect("/");

});

app.listen(8000,function(req,res){
  console.log("running on M1");
});
