import React from 'react'
import './brand.css'
import { google,slack,dropbox,shopify,atlassian } from './import'
function Brand() {
    return (
        <div className='brand d-flex justify-content-center flex-wrap align-items-center section-padding'>
            <div>
                <img src={google} alt="google"/>
            </div>
            <div>
                <img src={slack} alt="slack"/>
            </div>
            <div>
                <img src={atlassian} alt="atlassian"/>
            </div>
            <div>
                <img src={dropbox} alt="dropbox"/>
            </div>
            <div>
                <img src={shopify} alt="shopify"/>
            </div>
        </div>
    )
}

export default Brand