const jwt =require('jsonwebtoken');

     let Tokengen= ({loginid})=>{
    const token= jwt.sign({loginid},"jwtprivate")
    return token;
     }
 
     module.exports=Tokengen;
