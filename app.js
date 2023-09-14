const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Signup = require("./src/db/connect");
const { log } = require("console");
const hbs = require("hbs");
const app = express();
const bcrypt = require("bcryptjs")
// require("../db/connect.js")

const port = process.env.PORT || 80;

// const staticPath=path.join(__dirname+"/public")

app.set('views', path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}))
app.set("view engine", "hbs");

app.get("/",(req,res)=>{
    res.render('index')
});
// app.get("/contact",(req,res)=>{
//     res.sendFile(dir__name+index.html)
// });

// app.post("/", async (req,res)=>{
//     const signUp = new Signup(req.body);
//     await signUp.save();
//     res.send("saved")
// })
app.post("/", async (req,res)=>{
    try {
        const password=req.body.password;
        const confirmPassword=req.body.cpassword;

        if(password===confirmPassword){
            const signUp=new Signup({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                cpassword:req.body.cpassword,
            })

        const signedUp=await signUp.save();
        res.status(201).render('index');
        }else{
            res.send("pasword are not matching.")
        }
    } catch (error) {
        console.log("An error occured.", error);
    }
})

app.post("/signin", async(req,res)=>{
    try {
        const loginName=req.body.userName;
        const loginPassword=req.body.userPassword;


        const userName= await Signup.findOne({name:loginName});

        const match = await bcrypt.compare(loginPassword, userName.password);
    
        if(match){
            res.render("index",{
                userName:loginName
            });
        }else{
            res.send("Wrong Details");
        }

    } catch (error) {
        res.status(404).send("Wrong catch Details");
    }

})

app.listen(port, ()=>{
    console.log(`server is running at port no. ${port} `)
})

mongoose.connect( "mongodb+srv://deepeshchandra:4pyAXu4Y6k46t2ZN@weatherapp.r77lmli.mongodb.net/weatherAppDataBase?retryWrites=true&w=majority").
then( () =>
{
    console.log(`connection successfull`);
}).catch( (e)=>{
    console.log(`no connection ${e}`);
});
