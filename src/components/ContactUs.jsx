import React from 'react'

//Style
import './style/ContactUs.scss'

function ContactUs() {
    return (
        <div className='contact'>
            <div className='contact__container max-width'>
                <div className="contact__textbox">
                    <div className="heading"><h2>Every business is different. <br />Let’s see how we can help yours.</h2></div>
                    <div className="text"> <p>Our ad-tech experts will be happy to discuss how Zeropark solutions  <br />can help <strong>maximize your brand reach</strong>or <strong>traffic monetization</strong></p></div>
                    <div className="btn"><button>Contact us</button></div>
                </div>
            </div>

        </div>
    )
}

export default ContactUs