//mongodb://localhost:27017

import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    })



const handleOpen = ()=>console.log("Connected To DB")
const handleError = (error)=>console.log("DB error"+error)
const db = mongoose.connection
db.on("error",handleError)
db.once("open",handleOpen)

