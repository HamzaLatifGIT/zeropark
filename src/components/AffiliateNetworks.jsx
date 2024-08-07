import React from 'react';

// style
import './style/AffiliateNetworks.scss';

//Assets | logo 
import Awin from '../assets/Brands-logo/logo-awin.svg'
import Amitad from '../assets/Brands-logo/logo-amitad.svg'
import Impact from '../assets/Brands-logo/logo-impact.svg'
import Rakuten from '../assets/Brands-logo/logo-rakuten.svg'
import Avantlink from '../assets/Brands-logo/logo-avantlink.svg'
import Andmore from '../assets/Brands-logo/logo-andmore.svg'


const AffiliateNetworks = () => {
    return (
        <div className="affiliate-networks">
            <div className="affiliate-networks-container max-width">
                <h1>Partnering up with Affiliate Networks</h1>
                <p>
                    Benefit from Zeropark Commerce Media lasting partnerships with globally trusted affiliate <br /> networks that mean:
                </p>
                <button className="signup-button btn">Sign up</button>
                <div className="benefits">
                    <div className="benefit">
                        <i className="icon icon-performance"></i>
                        <p> <strong>Unparalleled performance</strong> <span>for brand representatives, media buyers and affiliate marketers</span> </p>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="benefit">
                        <i className="icon icon-freedom"></i>
                        <p> <strong>Full freedom</strong> <span>of placement configuration in your campaigns</span> </p>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="benefit">
                        <i className="icon icon-teams"></i>
                        <p> <strong>Experienced teams</strong> <span>ready to support your advertising ventures</span></p>
                    </div>
                </div>
                <div className="networks">
                    <div className="network"><img src={Awin} alt="" /></div>
                    <div className="network"><img src={Amitad} alt="" /></div>
                    <div className="network"><img src={Impact} alt="" /></div>
                    <div className="network"><img src={Rakuten} alt="" /></div>
                    <div className="network"><img src={Avantlink} alt="" /></div>
                    <div className="network"><img style={{ filter: 'invert(100%)' }} src={Andmore} alt="" /></div>
                </div>
            </div>
        </div>
    );
}

export default AffiliateNetworks;
