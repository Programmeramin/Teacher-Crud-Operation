import mongoose from "mongoose";

const TeacherSchema = mongoose.Schema({

    name : {
        type : String,
        required : true,
        trim : true,
    },

    age : {
        type : Number,
        required : true,
       
    },

    profession : {
        type : String,
        trim : true,
        required : true,
    },

    gender : {
         type : String,
         trim : true,
         required : true,
    },

    college : {
        type : String,
        trim : true,
        required : true,
    },

    cell : {
        type : String,
        trim : true,
        required : true,
        unique : true,
    },


    email : {
        type : String,
        trim : true,
        required : true,
        unique : true,

    },

    status : {
        type : Boolean,
        default : true,
    },

    photo : {
        type : String,
        default : null,
    }

 
});


export default mongoose.model("Teacher", TeacherSchema);