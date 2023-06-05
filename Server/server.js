const path = require("path");
const express = require("express");
const dotenv=require('dotenv');
dotenv.config();
const userRoute = require("./Routes/UsersRoute");
const error = require("./Middleware/errorMiddleware");
const bookRoute = require("./Routes/BooksRoutes");
const dbConnect=require("./config/dbConnect");
const app = express();
const cors=require('cors')
//dbconnect
 dbConnect()
//Routes
app.use(express.json());
app.use(cors());
app.use("https://bookmaniaserver.onrender.com/api/users", userRoute);
app.use("https://bookmaniaserver.onrender.com/api/books", bookRoute);
app.use(error)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// mongoDb PassWord:t7s1n9oL9HHVRdwk
