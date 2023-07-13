import express from "express";
import { deleteTask, newTask, showAllTask, updateTask } from "../controllers/taskController.js";
import { isAuthenticated } from "../middleware/auth.js";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config({
    path:'./data/config.env'
})
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "AuthenticationApp",
  })
  .then(() => {
    console.log("Task database connected");
  })
  .catch((e) => console.log(e));

const taskRouter = express.Router();

taskRouter.post("/new", isAuthenticated, newTask);
taskRouter.get("/all", isAuthenticated, showAllTask);
taskRouter.route("/:id").put(updateTask).delete(deleteTask);


export default taskRouter;
