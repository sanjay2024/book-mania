const path = require("path");
const express = require("express");
const dotenv=require('dotenv');
dotenv.config();
const userRoute = require("./Routes/UsersRoute");
const error = require("./Middleware/errorMiddleware");
const bookRoute = require("./Routes/BooksRoutes");
const dbConnect=require("./config/dbConnect");
const app = express();
//dbconnect
 dbConnect()
//Routes
app.use(express.json());

app.use("/api/users", userRoute);
app.use("/api/books", bookRoute);
const __dirname2 = path.resolve();
app.use("/uploads", express.static(path.join(__dirname2, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname2, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname2, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}
app.use(error.notfoundErrorMiddleware);
app.use(error.errorMiddlewareHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// mongoDb PassWord:t7s1n9oL9HHVRdwk
