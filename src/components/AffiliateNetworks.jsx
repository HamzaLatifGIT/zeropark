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
                <h1 data-sal='slide-up' data-sal-delay='100'>Partnering up with Affiliate Networks</h1>
                <p data-sal='slide-up' data-sal-delay='300'>
                    Benefit from Zeropark Commerce Media lasting partnerships with globally trusted affiliate <br /> networks that mean:
                </p>
                <button className="signup-button btn" data-sal='slide-up' data-sal-delay='500'>Sign up</button>
                <div className="benefits" data-sal='slide-right' data-sal-delay='700'>
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
                <div className="networks" >
                    <div className="network" data-aos='slide-up' data-aos-delay='2000'><img src={Awin} alt="" /></div>
                    <div className="network" data-aos='slide-up' data-aos-delay='2100'><img src={Amitad} alt="" /></div>
                    <div className="network" data-aos='slide-up' data-aos-delay='2200'><img src={Impact} alt="" /></div>
                    <div className="network" data-aos='slide-up' data-aos-delay='2300'><img src={Rakuten} alt="" /></div>
                    <div className="network" data-aos='slide-up' data-aos-delay='2400'><img src={Avantlink} alt="" /></div>
                    <div className="network" data-aos='slide-up' data-aos-delay='2500'><img style={{ filter: 'invert(100%)' }} src={Andmore} alt="" /></div>
                </div>
            </div>
        </div>
    );
}

export default AffiliateNetworks;
