import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'
function Footer() {
    return (
        <div className='footer section-padding d-flex flex-column align-items-center justify-content-center text-white'>
            <div className="footer-heading text-center w-100">
                <h1 className="gradient-text">
                    Do you Want into future before Others
                </h1>
            </div>
            <div className="footer-btn border d-flex align-items-center justify-content-center">
                <p className='m-0'>Request Early Access</p>
            </div>
            <div className="footer-links d-flex justify-content-between w-100 flex-wrap ">
                <div className="links-logo">
                    <img src={gpt3Logo} alt="" />
                    <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                </div>
                <div className="links-div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className="links-div">
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="links-div">
                    <h4>Get in touch</h4>
                    <p>Overons</p>
                    <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p>085-132567</p>
                    <p>info@payme.net</p>
                </div>
            </div>
            <div className="footer-copyright">
                <p>&copy; 2023 GPT-3. All Rights Reversed</p>
            </div>
        </div>
    )
}

export default Footer