const express =require('express')
const asynchHandler = require("express-async-handler");
const authMiddlware = require("../Middleware/authMiddleware");
const User = require("../models/Users");
const generateToken = require("../utils/generateToken");
const UserRoute = express.Router();

//Create user
UserRoute.post(
  "/",
  asynchHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      throw new Error("User Exist");
    }
    const user = await User.create({ name, email, password });
    if (user) {
      res.status(200);
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
        token: generateToken(user._id),
      });
    }
    // res.status(500);
    // throw new Error('Server Error');
  })
);

UserRoute.post(
  "/login",
  asynchHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    //Compare password
    if (user && (await user.isPasswordMatch(password))) {
      res.status(201);
      res.status(200);
      res.json({
        _id: user._id,
        name: user.name,
        password: user.password,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid login credentials");
    }
  })
);

//GET PROFILE

UserRoute.get(
  "/profile",
  authMiddlware,
  asynchHandler(async (req, res) => {
    try {
      const user = await User.findById(req.user.id).populate("books");
      res.status(404);
      if (!user) throw new Error(`You don't have any profile yet`);
      res.status(201);
      res.send(user);
    } catch (error) {
      res.status(500);
      throw new Error("Server error");
    }
  })
);

//UPDATE PROFILE

UserRoute.put(
  "/profile/update",
  authMiddlware,
  asynchHandler(async (req, res) => {
    const user = await User.findById(req.user.id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      //This will encrypt automatically in our model
      if (req.body.password) {
        user.password = req.body.password || user.password;
      }
      const updateUser = await user.save();
      res.json({
        _id: updateUser._id,
        name: updateUser.name,
        password: updateUser.password,
        email: updateUser.email,
        token: generateToken(updateUser._id),
      });
    } else {
      res.status(401);
      throw new Error("User Not found");
    }
  })
);

//Fetch all Users

UserRoute.get(
  "/",
  asynchHandler(async (req, res) => {
    try {
      const users = await User.find().populate("books");
      res.status(200);
      res.json(users);
    } catch (error) {}
  })
);

module.exports = UserRoute;
