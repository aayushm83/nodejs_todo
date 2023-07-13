import mongoose from "mongoose"

console.log("hello")

export const mongoDB = () => {mongoose.connect("mongodb://127.0.0.1:27017", {
    dbName: "AuthenticationApp"
}).then(() => { console.log("database connected") })
    .catch((e) => console.log(e))

}