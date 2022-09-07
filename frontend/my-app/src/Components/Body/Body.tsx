import React, {  useState } from "react";
import Courses from "./Courses/Courses";
import Students from "./Students/Students";
import StudentCourses from "./StudentCourses/StudentCourses";
import {Routes, Route, Link} from 'react-router-dom'
import '../Body/Body.css'


function Body () {

    return(
        <div>
            <Routes>
                <Route path="/Courses" element={<Courses/>}/>
                <Route path="/Students" element={<Students/>}/>
                <Route path="/StudentCourses" element={<StudentCourses/>}/>
            </Routes>
        </div>

    )
}

export default Body