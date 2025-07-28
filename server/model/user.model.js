import mongoose  from "mongoose";


const userSchema = new  mongoose.Schema({
    email : {
        type : String ,
        required : true ,
        unique : true 

    } ,


    fullName : {
        type : String ,
        required : true ,

    },
    title : {
        type : String ,
        default : "Developer"
        

    },

    password : {
        type : String ,
        required : true ,
        minlength : 6
    },
    profilePic : {
        type : String ,
        default: ""
    } ,


    interests : {
       type :  [String] ,
       default : ["full stack", "developer","frontend"]
    } , 

   

} , {timestamps : true})

const User = mongoose.model("User" , userSchema)

export default User