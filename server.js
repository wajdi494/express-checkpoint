const express=require("express")
const path=require("path")//read the diractory of code html
const app=express()
const port=5000
const date=new Date()
const day= date.getDay()
const hour=date.getHours()
const verif=(req,res,next)=>{
    if(day>=1 && day<=5 && hour>=9 && hour<=14){
        next()
    }
    else {
        res.send("we are closed now")
    }
}
app.get("/",verif,(req,res)=>{
    res.sendFile(path.join(__dirname,"public","home.html"))
})
app.get("/contact",verif,(req,res)=>{
    res.sendFile(path.join(__dirname,"public","contact.html"))
})
app.get("/about",verif,(req,res)=>{
    res.sendFile(path.join(__dirname,"public","about.html"))
})

app.listen(port,console.log("server is ranning"))

   