import { app } from "./app.js";
import dotenv from "dotenv"
dotenv.config({
    path:'./data/config.env'
})


app.listen(5000, () => {
    console.log(`Server is running on ${process.env.PORT} in ${process.env.NODE_ENV}`)
})