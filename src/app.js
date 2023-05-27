const express=require("express");
const app=express();
const port= process.env.PORT || 8000;
const path=require("path")
const hbs=require("hbs");
const staticPath=path.join(__dirname,"../public")
const partialspath=path.join(__dirname,"../tempelates/partials")
const viewspath=path.join(__dirname,"../tempelates/views");

app.use(express.static(staticPath));
app.set('view engine','hbs')
app.set('views',viewspath);
 hbs.registerPartials(partialspath);

app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/weather",(req,res)=>{
    res.render("weather");
})

app.get("*",(req,res)=>{
    res.render("404");
})
app.listen(port,(err)=>{
    if(err)
    console.log(err);
    else
    console.log(`listening at ${port}`);
});