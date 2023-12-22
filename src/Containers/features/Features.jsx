import React from 'react'
import './features.css'
import Feature from '../../Components/feature/Feature'



function features() {
    const featuresData = [
        {
        title : 'Improving and distrusts instantly',
        text : 'From they fine john the give of rich he. They age draw Improving and distrust may instantly was household applauded.'
        },
        {
        title : 'Become the tended active',
        text : 'From they fine john the give of rich he. They age draw Improving and distrust may instantly was household applauded.'
        },
        {
            title : 'Message or am nothing',
            text : 'From they fine john the give of rich he. They age draw Improving and distrust may instantly was household applauded.'
        },{
            title : 'Really boy law county',
            text : 'From they fine john the give of rich he. They age draw Improving and distrust may instantly was household applauded.'
        },
    ]
    return (
        <div className='features section-padding d-flex justify-content-between' id='features'>
            <div className="feature-heading d-flex  flex-column">
                <h1 className="gradient-text">
                    The Future is Now and You Just Need To Realize it. Step into Future Today& Make it Happen.
                </h1>
                <p>
                    Request Early Access to Get Started
                </p>
            </div>
            <div className="feature-container">
                {featuresData.map((item,index) => (
                    <Feature text={item.text} title={item.title} key={index}/>
                )  
                )}
            </div>
        </div>
    )
}

export default features