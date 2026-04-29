import mongoose from "mongoose";


const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:[true, 'Please provide a username'],
        unique:true
    },
    email:{
        type: String,
        required: [true, 'Please provide a email'],
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:[true, "Please provide a password!"]
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    forgottenPasswordToken:{
        type:String
    },
    forgottenPasswordTokenExpiry:{
        type:Date
    },
    verifyToken:{
        type:String
    },
     verifyTokenExpiry:{
        type:Date
    },

})
const User=mongoose.models.users || mongoose.model('users',userSchema)
export default User