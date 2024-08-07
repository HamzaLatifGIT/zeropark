import React from 'react';

//style
import './style/HeroSection.scss';

//Assets | Icons
import videoBg from '../assets/file.mp4';

const HeroSection = () => {
    return (
        <section className="hero-section ">
            <video className="background-video" autoPlay muted>
                <source src={videoBg} type="video/mp4" />
            </video>
            <div className="hero-section__content max-width">
                <div>
                    <div><p>🚀 Cookieless advertising solutions</p></div>

                    <div>   <h1>Drive incremental <br />performance <br /> to your brand</h1></div>
                    <div><button className="sign-up-btn">Sign up</button></div>
                </div>
            </div>

        </section>
    );
};

export default HeroSection;
