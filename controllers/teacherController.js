import { name } from "ejs";
import Teacher from "../models/Teacher.js";
import nodemailer from "nodemailer"
import axios from "axios";

/** Teacher data created  */

export const GetTeacherCreated = async (req, res) =>{

    const {name, age, college, profession, gender, status, email, cell}  = req.body;

    const transport = nodemailer.createTransport({

        host : process.env.MAIL_HOST,
        port : process.env.MAIL_PORT,
          
        auth : {
            user : process.env.MAIL_ADDRESS,
            pass : process.env.MAIL_PASS
             
        },
    
       
    });
    
    
    
    await transport.sendMail({
        from : `MERN STACK COMMUNITY <${process.env.MAIL_ADDRESS}>`,
        subject : 'MERN STACK COMMUNITY',
        to  : req.body.email,
        text : `Hello ${req.body.name}, You are ${req.body.age} Years old you are ${req.body.profession}`,
    
        
    
        html : `
        
        <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
    
    <style>
    
       .container{
        width: 600px;
        height: 500px;
        margin: auto;
        margin-top: 100px;
        margin-bottom : 30px;
       }
    
       .email-body{
        width: 90%;
        text-align: center;
        
       }
    
       .email-logo img{
        width: 200px;
        height: 150px;
       }
    
       .email-body P{
        color:white;
        background-color: rgb(0, 37, 248);
        font-size: 30px;
        align-items: center;
        
       }
    
       h5{
        font-size: 20px;
        align-items: left;
       }
    
       .email-body a{
        font-size: 30px;
        color: rgb(255, 123, 0);
        margin-right: 10px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
       }
      
    </style>
    </head>
    <body>
    
    <div class="container">
    <div class="email-body">
    
       
    
        <div class="email-logo">
            <img src="https://miro.medium.com/v2/resize:fit:678/0*kxPYwfJmkXZ3iCWy.png" alt="">
        </div>
    
        <h1>Hello, ${req.body.name}</h1>
        <h2>You are ${req.body.age} Years old</h2>
        <h3>Skill : ${req.body.profession}</h3>
    
    
    
        <p>Your Are Wellcome by MERN STACK Developer Community Group</p>
    
        <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corrupti atque ipsam corporis, aliquid laudantium! Labore necessitatibus eligendi quas recusandae?</h5>
    
        <hr>
    
        <a href="#"><i class="fa-brands fa-facebook"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-linkedin"></i></a>
     
    </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </body>
    </html>
        
        `
    
        
    
    });


    axios.get(
        `http://bulksmsbd.net/api/smsapi?api_key=3a5g6eeIJ1ElcqKbyuFe&type=text&number= ${req.body.phone}&senderid=8809617612994&message= HI ${req.body.name}, You are ${req.body.age} Years old and you are a ${req.body.skill} Expert, Our DEVELOPER Community to Your account created successfully. So, use fully free`
  );

    let teacherPhoto = null;

    if(req.file ?.filename){
        teacherPhoto = req.file.filename;
    }
 
    const data = await Teacher.create({
        name, age, gender, 
        college, status, 
        profession, email,
         cell, photo : teacherPhoto,
    }) 

    res.redirect("/");
 
} 


/**Get All Teacher */

export const GetAllTeacher = async (req, res) =>{

    // Data conditional find system

    // const data = await Teacher.find().where("age").gt(20);
    //  const data = await Teacher.find().and([{status : false, age : {$lte : 25}}]);
    // const data = await Teacher.find().or([{status : false}, {age : {$lte : 25}}]);
    // const data = await Teacher.find().where("status").in(["false"]);
    //  const data = await Teacher.find().where("status").nin(["false"]);
    const data = await Teacher.find({status : {$nin: ['true']}})

    res.status(200).json(data);

}


/**Get Single Teacher */

export const GetSingleTeacher = async (req, res) =>{

    const {id} = req.params;

    // const data = await Teacher.find({_id : id});
    // const data = await Teacher.findById(id).select("name");
    const data = await Teacher.findById(id).select("-name -age -status -college");
 

    res.status(200).json(data);

}



/** Delete Teacher */

export const DeleteTeacher = async (req, res) =>{

    const {id} = req.params;

    const data = await Teacher.deleteOne({_id : id});

    res.status(200).json(data);

};


/** Update Teacher */
 
export const UpdateTeacher = async (req, res) =>{

    const {id} = req.params;

    const data = await Teacher.updateOne({_id : id}, {name : {$set : name}});

    res.status(200).json(data);

} 
   


// ejs system teacher fetch mongo db

// Teacher create 
 
export const CreateTeacher = async (req, res) =>{

   res.render("create")

}


// Show All Teacher  

export const ShowAllTeacher = async (req, res) =>{

   const data = await Teacher.find();

   res.render("teacher",{
    teacher : data,
   })
  
}


// Show Single Teacher  

export const ShowSingleTeacher = async (req, res) =>{

    const {id} = req.params;

    const data = await Teacher.find({_id : id});
 
    res.render("show",{
     teacher : data,
    })
   
 };



 // Show Delete Teacher  

export const SingleDeleteTeacher = async (req, res) =>{

 
        const {id} = req.params;
    
        const data = await Teacher.deleteOne({_id : id});
        
        res.redirect("/");

   
 }; 


 

  // Show Edit Teacher  

export const EditTeacher = async (req, res) =>{
    const {id} = req.params;

    const data = await Teacher.findOne({_id : id});     

    res.render("edit", {
        teacher: data,});
 
};


/**Update data submit */

export const UpdateTeacherData = async (req, res) =>{
    const {id} = req.params;
    const {name, age, college, profession, gender, status, email, cell,}  = req.body;

   let teacherUpdatePhoto = req.file.filename;


    const data = await Teacher.updateMany({_id : id}, {$set : {
        name, age, college, 
        profession, gender,
        status, email, cell, photo : teacherUpdatePhoto,
    }});

    res.redirect("/");
} 
  
