const express = require("express")
const {collection, collection1} = require("./mongo")
// const collection1 =require("./mongo")
const cors = require("cors")
const { findAllByPlaceholderText } = require("@testing-library/react")
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

app.post("/TransactionPost",async (req,res)=>{
    // const{txnhash,requestId,mailId,purpose}=req.body

    // const data={
    //     email:email,
    //     password:password,
    //     role:role
    // }
    let E=req.body;
    console.log("EEEEE ",collection1);
    console.log("tttt ",E);
    let send=await collection1.insertMany(E);
    res.json("okok");
    
    
 })

 app.post("/Transactions",async (req,res)=>{
    let E=req.body;
    console.log(E)
    let get=await collection1.find({mailId:E[0],requestId:E[1]});
    console.log("getttt  ",get)
    res.send(get)
    


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

