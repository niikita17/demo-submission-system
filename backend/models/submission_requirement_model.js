import mongoose, { Schema } from "mongoose"

const requirementsSchema=new Schema({
    student_id:{
       type:Schema.Types.ObjectId,
        ref:"User_student"
    },
    fessBalance:{
        type:Number,
        required:true,
        trim:true,
    },
   totalFess:{
       type:Number,
        required:true,
        trim:true,
    },
    feespaid:{
        type:Number,
        required:true,
        trim:true,
    },
    attendance:{
         type:Number,
        required:true,
        trim:true,
    },
   defaulter:{
    type:Boolean,
    required:true
   }
}
)
export const Submission_Requirements=mongoose.model("Submission_Requirements",requirementsSchema)