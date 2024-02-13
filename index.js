import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
const app=express();
dotenv.config();

const port=3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


mongoose.connect("mongodb+srv://jadhammoud7:"+process.env.id+"@cluster1.o3k4gdg.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true });

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