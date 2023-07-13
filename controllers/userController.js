import { userModel } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendCookies } from "../utils/features.js";
// import { decode } from "jsonwebtoken"

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(userModel.find({ name }));
  let user = await userModel.findOne({ email });

  if (user) {
    return res.status(404).json({
      success: false,
      messsage: "User Already Exists",
      user,
    });
  }
  console.log(password);
  const hashedPassword = await bcrypt.hash(password, 10);

  user = await userModel.create({
    name,
    email,
    password: hashedPassword,
  });

  sendCookies(user, res, "Registered Successfully");
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    return res.status(404).json({
      success: false,
      messsage: "Wrong id or password",
    });
  }

  const isMatched = await bcrypt.compare(password, user.password);
  if (!isMatched) {
    return res.status(401).json({
      success: false,
      message: "Wrong id or password",
    });
  }

  sendCookies(user, res, "Login Successful");
};

export const getMyDetails = async (req, res) => {
  res.status(201).json({
    success: true,
    user: req.user,
  });
};

export const logout = (req, res) => {
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      sameSite:process.env.NODE_ENV === "development" ?"lax":"none",
      secure: process.env.NODE_ENV === "development"?false:true,
    })
    .json({
      success: true,
    });
};
