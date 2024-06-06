import mongoose, { Schema } from "mongoose"

const a_requestSchema = new mongoose.Schema({
  student_id:{
          type:Schema.Types.ObjectId,
        ref:"User_Student"
    },
    subject:{
        type:String,
     required: true // Adding required to ensure data integrity
  }
}, {
  _id: false // To prevent automatic creation of _id field for subdocuments
});


const AllrequestSchema=new Schema({
    teacher_id:{
          type:Schema.Types.ObjectId,
        ref:"User_Teacher"
    },
    all_requests:{
     default: [] // Defaulting to an empty array if no requests
  }
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps
});
export const all_Request=mongoose.model("all_Requests",AllrequestSchema)