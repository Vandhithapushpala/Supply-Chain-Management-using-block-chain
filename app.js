const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/",cors(),(req,res)=>{

})


app.post("/",async(req,res)=>{
    const{email,password,role}=req.body

    try{

        const check=await collection.findOne({email:email})
       
        console.log(check);
        if(check){
            
            if(check.password==password ){
                
                res.json({status:"exist",role:check.role})
                
            }
            else{
                res.json("wrong credentials");
            }
        }
        
        else{
            res.json("notexist")
        }

    }
    catch(e){
        alert("wrong details")
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{email,password,role}=req.body

    const data={
        email:email,
        password:password,
        role:role
    }

    try{
        const check=await collection.findOne({email:email})
        
        if(check){
            
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.listen(8000,()=>{
    console.log("port connected");
})
