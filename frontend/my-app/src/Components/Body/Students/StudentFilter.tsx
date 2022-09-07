import React, { useState } from "react";

interface props {
    setFilterOpen(arg:boolean): void
    filterresult(arg1:string,arg2:number,arg3:string):void
    fetchdata():any
}


function StudentFilter ({setFilterOpen,filterresult,fetchdata}:props) {

    const [Name,setName] = useState<string>()
    const [Age,setAge] = useState<number>()
    const [Email,setEmail] = useState<string>()

    return (
        <div className="filterform">
            <section className="innerform">
                <div className="belowheader">
                    <div className="firstdiv1">
                        <input value={Name} placeholder="Student's Name" onChange={(text) => setName(text.target.value)} ></input>
                        <input value={Age} type='number' placeholder="Student's Age" onChange={(text) => setAge(Number(text.target.value))}></input>
                        <input value={Email} placeholder="Student's Email" onChange={(text) => setEmail(text.target.value)}></input>
                        
                    </div>
                    <footer>
                        <button onClick={() => {
                            filterresult(Name!,Age!,Email!)
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

export default StudentFilter