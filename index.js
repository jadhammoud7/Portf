import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const app=express();

const port=3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
// mongoose.connect("mongodb+srv://jadhammoud7:Jadhammoud007@cluster1.o3k4gdg.mongodb.net/portfolioDb", { useNewUrlParser: true });

mongoose.connect("mongodb://localhost:27017/portfolioDb", { useNewUrlParser: true });

const messagesSchema=new mongoose.Schema({
    name:String,
    email:String,
    subject:String
})
const Message=mongoose.model("Message",messagesSchema);

app.get("/",(req,res)=>{
    res.render("index.ejs");
})
app.post("/submit",(req,res)=>{
    console.log("clicked");
    const name=req.body.name;
    const email=req.body.email;
    const subject=req.body.subject;
    if(name!=null && email!=null && subject!=null){
        const message=new Message({
            name:name,
            email:email,
            subject:subject
        });
        message.save();                                                                                                        
        res.redirect("/");
    }
})
app.listen(port,()=>{
    console.log("connected to port: ",port);
})