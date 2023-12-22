import React from 'react'
import './cta.css'
function CTA() {
    return (
        <div className='cta border border-white d-flex justify-content-between align-items-center rounded rounded-4 text-white'>
            <div className="cta-content">
                <p>Request Early Access to Get Started</p>
                <h3>Register today & Start exploring the endless possibilities</h3>
            </div>
            <div className="cta-btn">
                <button type="button">Get Started</button>
            </div>
        </div>
    )
}

export default CTA