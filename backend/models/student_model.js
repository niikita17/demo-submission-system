import mongoose, { Schema } from "mongoose"

const studentSchema=new Schema({
    student_id:{
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
    rollno:{
        type:string,
        unique:true,
        trim:true,
    },
    avatar:String,
    branch:{
         type:string,
        trim:true,
    },
    subjects:Array,
    created_at: {
        timestamps:true
    }
}
)
export const User_Student=mongoose.model("User_Student",studentSchema)