import React from 'react'
import './header.css'
import pepole from '../../assets/people.png'
import ai from '../../assets/ai.png'
function Header() {
    return (
        <div className='header section-padding d-flex' id='home'>
            <div className="header-content d-flex flex-column   ">
                <h1 className="header-text gradient-text"> Let's Build Something amazing with GPT-3 OpenAI</h1>
                <p>Yet Bed any for travelling assistance. Not thoughts all exercise blessing  way everything joy alternative the
                    attachment. Party we years to order allow asked of.
                </p>
                <div className="input">
                    <input type="email" placeholder='Your Email Adresss' />
                    <button type="button">Get Started</button>
                </div>
                <div className="people d-flex align-items-center ">
                    <img src={pepole} alt="People" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className="header-image d-flex align-items-center justify-content-center ">
                <img src={ai} alt="ai" />
            </div>
        </div>
    )
}

export default Header