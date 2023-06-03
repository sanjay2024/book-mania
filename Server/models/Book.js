const mongoose=require('mongoose');
const bookSchema=mongoose.Schema({
        isbn:{
                type:String,
                require:true,
                unique:true
        },
        title:{
                type:String,
                required:true
        },
        author:{
                type:String,
                required:true
        },
        publicationDate:{
                type:String,
                required:true
        },
        noOfPages:{
                type:Number
        },
        category:{
                type:String,
        }

})
const book=mongoose.model('book',bookSchema);
module.exports=book