const express = require("express");
const asynchHandler = require("express-async-handler");
const Book = require("../models/Book");
const BookRoute = express.Router();

//Create Book
BookRoute.post(
  "/",

  asynchHandler(async (req, res) => {
    try {
      const book = await Book.create(req.body);
      res.status(200);
      res.json(book);
    } catch (error) {
      res.status(500);
      throw new Error(error);
    }
  })
);

BookRoute.get(
  "/",
  asynchHandler(async (req, res) => {
    const books = await Book.find().populate("createdBy").sort("createdAt");
    //Compare password
    if (books) {
      res.status(201);
      res.send(books);
    } else {
      res.status(401);
      throw new Error("Server error");
    }
  })
);

//Delete book

BookRoute.delete(
  "/:id",
  asynchHandler(async (req, res) => {
    try {
      const book = await Book.findByIdAndDelete(req.params.id);
      res.status(200);
      res.send(book);
    } catch (error) {
      res.status(500);
      throw new Error("Server Error");
    }
  })
);

//Update

BookRoute.put(
  "/:id",
  asynchHandler(async (req, res) => {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body);
      res.status(200);
      res.json(book);
    } catch (error) {
      res.status(500);
      throw new Error("Update failed");
    }
  })
);

//find a book
BookRoute.get(
  "/:id",
  asynchHandler(async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      res.status(200);
      res.send(book);
    } catch (error) {
      res.status(500);
      throw new Error("No book found");
    }
  })
);

module.exports =BookRoute;
