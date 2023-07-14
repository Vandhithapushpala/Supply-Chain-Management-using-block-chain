const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/react-login-tut")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    }
})
const anotherSchema=new mongoose.Schema({
    mailId:{
        type:String,
        required:true
    },
    txnhash:{
        type:String,
        required:true
    },
    requestId:{
        type:String,
        required:true
    },
    purpose:{
        type:String,
        required:true
    },
    
})
const collection = mongoose.model("withroles",newSchema)
const collection1 = mongoose.model("transactions",anotherSchema)

module.exports={
    collection:collection,
    collection1:collection1
}
// module.exports=collection1