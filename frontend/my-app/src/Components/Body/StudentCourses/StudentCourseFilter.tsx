import React, { useState } from "react";

interface props {
    setFilterOpen(arg:boolean): void
    filterresult(arg1:string,arg2:string):void
    fetchdata():any
}


function StudentCourseFilter ({setFilterOpen,filterresult,fetchdata}:props) {

    const [Student,setStudent] = useState<string>()
    const [Course,setCourse] = useState<string>()

    return (
        <div className="filterform">
            <section className="innerform">
                <div className="belowheader">
                    <div className="firstdiv1">
                        <input value={Student} placeholder="Student Name" onChange={(text) => setStudent(text.target.value)} ></input>
                        <input value={Course} placeholder="Course Title" onChange={(text) => setCourse(text.target.value)}></input>
                    </div>
                    <footer>
                        <button onClick={() => {
                            filterresult(Student!,Course!)
                            }} className="save">Filter</button>
                        <button onClick={() => {
                            fetchdata()
                            setFilterOpen(false)
                        }
                            } className="cancel">Cancel</button>
                    </footer>
                </div>
            </section>
        </div>
    )

}

export default StudentCourseFilter