const expressApp = require("express");
// import expressApp from 'express';

const PORT = 9000

const server = expressApp()

server.get("/user",(req,res,next)=>{
    const{query,parms,body}= req
    console.log({query,parms,body})

    res.status(201).send("Users are there")
})

server.listen(PORT,()=>console.log(`this server is running on port:${PORT}`))
