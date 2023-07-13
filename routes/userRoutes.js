import express from "express"
import { getMyDetails, login, logout, register } from "../controllers/userController.js"
import mongoose from "mongoose"
import { isAuthenticated } from "../middleware/auth.js"
// import { mongoDB } from "../data/database.js"

const userRouter = express.Router()

mongoose.connect("mongodb://127.0.0.1:27017", {
    dbName: "AuthenticationApp"
}).then(() => { console.log("database connected") })
    .catch((e) => console.log(e))

// mongoDB

userRouter.post("/new", register)
userRouter.post("/login", login)
userRouter.get("/me", isAuthenticated, getMyDetails)
userRouter.get("/logout",logout)
export default userRouter

