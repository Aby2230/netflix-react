import React from 'react'
import './Nav.css'
import { useState, useEffect } from 'react'

function Nav() {

    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)

            } else
                handleShow(false)
        })

        return () => {
            window.removeEventListener("scroll", () => { })
        }
    })

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className='nav_logo'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png "
                alt='netflix logo'
            />


        </div>
    )
}

export default Nav

