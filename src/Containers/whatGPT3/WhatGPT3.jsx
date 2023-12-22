import React from 'react'
import './whatgpt3.css'
import Feature from '../../Components/feature/Feature'

function WhatGPT3() {
    return (
        <div className='whatgpt3 section-margin' id='wgpt3'>
            <div className="whatgpt3-feature ">
                <Feature title='What is GPT' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae repudiandae qui maiores adipisci. Exercitationem.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae repudiandae qui maiores adipisci. Exercitationem. Lorem ipsum dolor, sit amet consectetur adipisicing elit.'/>
            </div>
            <div className="whatgpt3-heading d-flex justify-content-between align-items-center">
                <h1 className="gradient-text">
                    The Possibilities are beyond your imagination
                </h1>
                <p>Explore The Library</p>
                
            </div>
            <div className="whatgpt3-container">
                <Feature title='Chatbots' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae repudiandae qui maiores adipisci. Exercitationem.'/>
                <Feature title='Knowledgebase' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae repudiandae qui maiores adipisci. Exercitationem.'/>
                <Feature title='Education' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae repudiandae qui maiores adipisci. Exercitationem.'/>
            </div>
        </div>  
    )
}

export default WhatGPT3