import { userModel } from "../models/userModel.js"
import jwt from "jsonwebtoken"
export const isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies
    console.log("hii")
    console.log(token)
    if (!token) {
        res.status(201).json({
            success: false,
            message: "Login First"
        })
    }
    const decoded = jwt.verify(token, "aayush")

    req.user = await userModel.findById(decoded._id)
    console.log("auth finished")
    next()
}