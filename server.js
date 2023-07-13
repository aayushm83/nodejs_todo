import { app } from "./app.js";
import dotenv from "dotenv"
dotenv.config({
    path:'./data/config.env'
})


app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT} in ${process.env.NODE_ENV}`)
    console.log(`database connected to ${process.env.MONGO_URI}`)
})