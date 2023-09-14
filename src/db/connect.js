const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const signUpSchema= mongoose.Schema(
    {
        name:{
            require:true,
            type:String,
        },
        email:{
            require:true,
            type:String,
        },
        password:{
            require:true,
            type:String,
        },
        cpassword:{
            require:true,
            type:String,
        }
    })

    signUpSchema.pre('save', async function(next){
        // if (this.isModified("password")) {
            
        // }
        this.password = await bcrypt.hash(this.password,10); 
        this.cpassword = undefined;
        next();
    })
const Signup = mongoose.model('SignUp',signUpSchema);
module.exports=Signup;

