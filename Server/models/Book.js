const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    publishedDate:{
         type:Date
    }
  }
);

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
