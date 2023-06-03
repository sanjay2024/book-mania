const express=require('express');
const bookRoutes=express.Router();
const Book=require('../models/Book');
const expressAsyncHandler = require('express-async-handler');
//insertBooks
bookRoutes.post('/addBook',async(req,res)=>{
        try{
                const {isbn,title}=req.body;
                const findIsbn= await Book.findOne({isbn})
                const findTitle= await Book.findOne({title});
                if(findIsbn){
                        return  res.json({"Message":"ISBN Already Exist!!!"});
                }
                else if (findTitle){
                        return res.json({ Message: "Title Already Exist!!!" });
                }
                const addBook=await Book.create(req.body);
                return res.json(addBook);
        }
        catch(e){
                console.log(e)
                return res.json(e);
        }
})
// fetch all Books
bookRoutes.get("/", async (req, res) => {
  const books = await Book.find();
  return res.json(books)
});
//fetch book
bookRoutes.get('/:isbn',async(req,res)=>{
        const {isbn}=req.params;
        const findBook= await Book.findOne({isbn});
        if(findBook){
                return res.json(findBook);
        }
        else{
                res.status(401);
                return res.send("No Results");
        }
})
bookRoutes.get("/title/:title", async (req, res) => {
  const { title } = req.params;
  console.log(title);
  const findBook = await Book.findOne({ title });
  if (findBook) {
    return res.json(findBook);
  } else {
    res.status(401);
    return res.send("No Results");
  }
});

// updateBook
bookRoutes.put('/:isbn',expressAsyncHandler(async(req,res)=>{
       try{
         const {isbn}=req.params;
        const findBook=await Book.findOne({isbn});
        if(findBook){
                console.log(req.body)
                const updatedBook=await Book.findOneAndUpdate({isbn},req.body,{new:true});
                console.log(updatedBook);
                res.json(updatedBook);
        }
        else {
                res.status(401);
                res.json({"message":"Not Found"});
        }
       }
       catch(e){
             res.send(e);
       }
}))

// deleteBook
bookRoutes.delete(
  "/:isbn",
  expressAsyncHandler(async (req, res) => {
    try {
      const { isbn } = req.params;
      const findBook = await Book.findOne({ isbn });
      if (findBook) {
        const DeleteBook = await Book.deleteOne({ isbn });
        res.json(DeleteBook);
      } else {
        res.status(401);
        res.json({ message: "Not Found" });
      }
    } catch (e) {
      res.send(e);
    }
  })
);

module.exports=bookRoutes;