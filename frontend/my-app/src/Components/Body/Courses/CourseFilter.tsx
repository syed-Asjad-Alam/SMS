import React, { useState } from "react";

interface props {
    setFilterOpen(arg:boolean): void
    filterresult(arg1:string,arg2:number,arg3:string,arg4:number):void
    fetchdata():any
}


function CourseFilter ({setFilterOpen,filterresult,fetchdata}:props) {

    const [Title,setTitle] = useState<string>()
    const [Type,setType] = useState<number>()
    const [Code,setCode] = useState<string>()
    const [Lectures,setLectures] = useState<number>()

    return (
        <div className="filterform">
            <section className="innerform">
                <div className="belowheader">
                    <div className="firstdiv1">
                        <input value={Title} placeholder="Course Title" onChange={(text) => setTitle(text.target.value)} ></input>
                        <input value={Type} type='number' placeholder="Course Type" onChange={(text) => setType(Number(text.target.value))}></input>
                        <input value={Code} placeholder="Course Code" onChange={(text) => setCode(text.target.value)}></input>
                        <input value={Lectures} type='number' placeholder="No. of Lectures" onChange={(text) => setLectures(Number(text.target.value))}></input>
                    </div>
                    <footer>
                        <button onClick={() => {
                            filterresult(Title!,Type!,Code!,Lectures!)
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

export default CourseFilter