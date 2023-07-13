import { taskModel } from "../models/taskModel.js";

export const newTask = async (req, res, next) => {
  const { title, description } = req.body;

  await taskModel.create({
    title,
    description,
    user: req.user,
  });
  res.status(201).json({
    success: true,
    message: "Task added",
  });
};

export const showAllTask = async (req, res, next) => {
  console.log("hii");
  const userid = req.user._id;
  const tasks = await taskModel.find({ user: userid });
  console.log("hello");
  res.status(200).json({
    success: true,
    tasks,
  });
};

export const updateTask = async(req, res, next) => {
  const { id } = req.params;
  const task = await taskModel.findById(id);
  console.log(task)
  if(!task)
  return next(new Error("nice"))
  task.isCompleted = !task.isCompleted;
  await task.save()
  res.status(201).json({
    success: true,
    message: "task upfdated successfully",
  });
};

export const deleteTask = async (req, res, next) => {
  const task = await taskModel.findById(req.params.id)
  console.log(task)
  if(!task)
  return next(new Error("Nice"))

  await task.deleteOne()

  res.status(200).json({
    message:"Successfully deleted",
    success: true
  })
};
