const mongoose = require("mongoose");
const dbConnect = () => {
  mongoose
    .connect(
      "mongodb+srv://sanjay2024:t7s1n9oL9HHVRdwk@cluster0.xo1zych.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
      console.log("Connection Established");
    })
    .catch((e) => console.log(e));
};
module.exports=dbConnect;
