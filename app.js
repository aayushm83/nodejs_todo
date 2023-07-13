import express from "express"

import cookieParser from "cookie-parser"
import userRouter from "./routes/userRoutes.js"
import taskRouter from "./routes/taskRoutes.js"
import cors from "cors"


export const app= express()

//using middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"",
    methods:["GET","POST","PUT","DELETE"],
    credentials: true,
}))
// app.use(cors({
//     origin : [],
//     methods: ["GET","POST","PUT","DELETE"],
//     credentials: true
// }))


//using routing

app.use("/api",userRouter)
app.use("/task/api",taskRouter)


app.use((err,req,res,next)=>{
    console.log("hii")
    return res.status(404).json({
        success:true,
        message:"Invalid iD"
    })
})
