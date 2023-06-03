const jwt=require('jsonwebtoken');
const genearateToken=(id)=>{
        return jwt.sign({ id: id }, 'BOOKMANIA123',{
                expiresIn:"30d"
        });
}
module.exports=genearateToken;