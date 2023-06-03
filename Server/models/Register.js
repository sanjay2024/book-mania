const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const RegisterSchema=mongoose.Schema({
        UserName:{
                type:String,
                required:true
        },
        emailId:{
                type:String,
                required:true,
                unique:true
        },
        UserPassword:{
                type:String,
                required:true
        }

});
RegisterSchema.pre('save',async function(){
        const salt=await bcrypt.genSalt(10);
        this.Password=await bcrypt.hash(this.Password,salt);
})
const Register=mongoose.model('Register',RegisterSchema);
module.exports=Register;