const express = require("express");
const app = express();
const usersRouter = require('./Routes/UsersRoute');
const bookRoutes=require('../Server/Routes/BooksRoutes')
const PORT = process.env.PORT || 5000;
app.use(express.json());
//dbConnect
const dbConnect=require('./config/dbConnect');
dbConnect();


//Routes
//User APi
app.use('/api/users',usersRouter);

//Books Apis
app.use("/api/books", bookRoutes);

app.listen(5000, () => {
        console.log("Server is Running!!!!");
});
// mongoDb PassWord:t7s1n9oL9HHVRdwk
