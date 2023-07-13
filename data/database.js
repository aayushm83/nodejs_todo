import mongoose from "mongoose"

console.log("hello")

export const mongoDB = () => {mongoose.connect(MONGO_URI, {
    dbName: "AuthenticationApp"
}).then(() => { console.log("database connected") })
    .catch((e) => console.log(e))

}