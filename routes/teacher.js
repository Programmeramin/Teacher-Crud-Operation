import express from "express";
import { 
    GetTeacherCreated ,
    GetAllTeacher,
    GetSingleTeacher,
    DeleteTeacher,
    CreateTeacher ,
    ShowAllTeacher,
    UpdateTeacher,
    ShowSingleTeacher,
    SingleDeleteTeacher,
    EditTeacher,
    UpdateTeacherData

} from "../controllers/teacherController.js";

import { TeacherPhoto } from "../utils/multer.js";

const router = express.Router();
 
//ejs router
router.get("/", ShowAllTeacher);
router.get("/create", CreateTeacher);
router.get("/single/:id", ShowSingleTeacher);
router.get("/delete/:id", SingleDeleteTeacher);
router.get("/edit/:id", EditTeacher);
router.post("/update/:id",TeacherPhoto, UpdateTeacherData);

// router
router.post("/teacher" , TeacherPhoto, GetTeacherCreated);
router.get("/teacher" , GetAllTeacher);
router.get("/teacher/:id" , GetSingleTeacher);
router.delete("/teacher/:id" , DeleteTeacher);
router.post("/teacher/:id" , TeacherPhoto, UpdateTeacher);
 
// default export
export default router;