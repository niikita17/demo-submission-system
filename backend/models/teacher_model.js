import mongoose, { Schema } from "mongoose"

const teacherSchema=new Schema({
    teacher_id:{
        type:String,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    fullname:{
        type:String,
        unique:true,
        lowercase:true,
        trim:true,
    },
    password:{
       type: String,
        unique:true,
        
        trim:true,
    },
    designation:{
        type:string,
        unique:true,
        trim:true,
    },
    avatar:String,
    class:Array,
    subjects:Array,
    created_at: {
        timestamps:true
    }
}
)
export const User_Teacher=mongoose.model("User_Teacher",teacherSchema)