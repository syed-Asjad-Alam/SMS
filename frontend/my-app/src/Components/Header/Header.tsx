import React from 'react'
import "../Header/Header.css"
import HeaderImage from '../../Images/Image.jpeg'


function Header() {

    return(
        <div>
            <div className='topbar'><h3>Student Management System</h3></div>
            <section className='intro'>
                <div className='introcontainer'>
                    <h1>
                        LOREM IPSUM
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                </div>

            </section>
        </div>
    )
}

export default Header;