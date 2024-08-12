import React from 'react';

//style
import './style/HeroSection.scss';

//Assets | Icons


const HeroSection = ({title,text,url}) => {
    return (
        <section className="hero-section ">
            <video className="background-video" autoPlay muted>
                <source src={url} type="video/mp4" />
            </video>
            <div className="hero-section__content max-width" data-sal='fade-in'>
                <div>
                    <div><p>{text}</p></div>

                    <div>{title}</div>
                    <div><button className="sign-up-btn">Sign up</button></div>
                </div>
            </div>

        </section>
    );
};

export default HeroSection;
