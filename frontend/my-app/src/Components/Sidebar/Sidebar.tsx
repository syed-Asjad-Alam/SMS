import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../Sidebar/Sidebar.css"



function Sidebar () {

    const [isOpen,setIsOpen] = useState(false)
    const [active,setActive] = useState(0)

    return (
        <div className={isOpen?'sidebar':'collapsed'}>
            <span className='icon' onClick={() => {
                isOpen?setIsOpen(false):setIsOpen(true)
            }}>
                <em></em><em></em><em></em><em></em>
            </span>
            <a className={active==0?'active':undefined}
                onClick={()=>setActive(0)}><Link to='/Courses'>Courses</Link></a>
            <a className={active==1?'active':undefined}
                onClick={()=>setActive(1)}><Link to='/Students'>Students</Link></a>
            <a className={active==2?'active':undefined}
                onClick={()=>setActive(2)}><Link to='/StudentCourses'>StudentCourses</Link></a>
        </div>
    )

}
export default Sidebar