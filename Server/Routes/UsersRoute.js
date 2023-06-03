const express = require("express");
const Users = require("../models/Users");
const asyncHandler = require("express-async-handler");
const genearateToken = require('../utils/generateToken');
const authMiddleware=require('../Middleware/authMiddleware');;
// const Publication=require('../models/Publication')
// const Author=require('../models/Author')

const usersRouter = express.Router();

// user Registeration
usersRouter.post(
  "/register",
  asyncHandler(async (req, res) => {
    const { UserName, emailId, UserPassword } = req.body;
    const userExist = await Users.findOne({ emailId: emailId });
    if (userExist) {
      throw new Error("mailID Already Exist!!");
    }
    const userCreated = await Users.create(req.body);
    res.json({
      id: userCreated._id,
      name: userCreated.UserName,
      mailId: userCreated.mailId,
      password: UserPassword,
      token: genearateToken(userCreated._id),
    });
  })
);

// user login
usersRouter.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { UserName, emailId, UserPassword } = req.body;
    const user = await Users.findOne({emailId});
    if (user && await user.isPasswordMatch(UserPassword)) {
      res.status(200);
      res.json({
        id:user._id,
        name:user.UserName,
        mailId:user.mailId,
        password:UserPassword,
        token:genearateToken(user._id)

      });
    } else {
      res.status(401);
      throw new Error("Invalid Credential");
    }
  })
);

// User Update
usersRouter.put("/UpdateProfile",authMiddleware,asyncHandler(async (req,res)=>{
  const user=await Users.findById(req.user.id);
  if(user){
    user.UserName=req.body.userName || user.UserName
    user.emailId=req.body.emailId || user.emailId
    if (req.body.UserPassword) {
      user.UserPassword = req.body.UserPassword || user.UserPassword;
    }
    const updatedUser=await user.save();
  }
  else{
    return res.json({"message":"user not found"})
  }
}));

// fetch user

usersRouter.get("/",authMiddleware,(req,res)=>{
  res.send(req.user);
});

// delete User
usersRouter.delete("/:id", async (req, res) => {
  res.send("user account is deleted");
});

module.exports = usersRouter;
