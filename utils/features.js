import jwt from "jsonwebtoken"

export const sendCookies=(user,res,message)=>{
    const token = jwt.sign({_id: user._id},"aayush")


    res.status(201).cookie("token",token,{
        httpOnly: true,
        maxAge: 15*60*1000,
        sameSite:process.env.NODE_ENV === "development" ?"lax":"none",
        secure: process.env.NODE_ENV === "development"?false:true,
    }).json({
        success: true,
        message,
    })

}