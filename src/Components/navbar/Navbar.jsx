import React, { useState } from 'react';
import './navbar.css';
import { MdMenu, MdClose } from "react-icons/md"
import logo from '../../assets/logo.svg'

const Menu = () => (
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#wgpt3">What is GPT?</a></p>
        <p><a href="#possibility">Possibility</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
    </>
)

function Navbar() {
    const [toggleMenu,setToggleMenu] = useState(false)
    return (
        <div className='navbar d-flex align-items-center justify-content-center'>
            <div className="links d-flex flex-grow-1 align-items-center justify-content-start">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="links-container d-flex">
                    <Menu />
                </div>
                <div className="sign d-flex justify-content-end flex-fill align-items-center">
                    <p>Sign in</p>
                    <button type='button'>Sign up</button>
                </div>
                <div className="menu">
                    {toggleMenu ?
                    <MdClose color='#fff'size={27} onClick={()=> setToggleMenu(false)}/> :
                    <MdMenu color='#fff' size={27} onClick={()=> setToggleMenu(true)}/>
                    }
                    {toggleMenu &&  (
                    <div className='menu-container d-flex flex-column justify-content-end  align-items-end  scale-up'>
                        <div className="menu-links">
                            <Menu />
                        </div>
                        <div className="menu-sign d-flex align-items-center">
                            <p>Sign in</p>
                            <button type='button'>Sign up</button>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar