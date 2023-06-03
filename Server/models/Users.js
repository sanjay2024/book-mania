const mongoose=require('mongoose');
const bcrypt = require("bcryptjs");
const UserSchema = mongoose.Schema({
  UserName: {
    type: String,
  },
  emailId: {
    type: String,
    required: true,
    unique: true,
  },
  UserPassword: {
    type: String,
    required: true,
  },
});
UserSchema.pre('save',async function(){
        const salt=await bcrypt.genSalt(10);
        this.UserPassword=await bcrypt.hash(this.UserPassword,salt);
})
UserSchema.methods.isPasswordMatch=async function(enteredPassword){
  return await bcrypt.compare(enteredPassword,this.UserPassword);
}
const users=mongoose.model('Users',UserSchema);
module.exports=users;