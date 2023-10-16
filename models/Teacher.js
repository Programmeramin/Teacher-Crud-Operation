import mongoose from "mongoose";

const TeacherSchema = mongoose.Schema({

    name : {
        type : String,
        required : [true, "Name field is important"],
        trim : true,
        lowercase : true,
        minLength : 5,
        maxLength : 15,
    },
 
    age : {
        type : Number,
        required : true,
        min : 18,
        max : 50,
       
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
        unique : [true, "Cell already exists"],
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