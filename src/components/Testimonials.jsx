import React from 'react';

//style
import './style/Testimonials.scss';

//Assets | logo
import DMS from '../assets/Brands-logo/logo-dms.svg'
import Atech from '../assets/Brands-logo/logo-atech.svg'
import WebAds from '../assets/Brands-logo/logo-weba.svg'

const testimonials = [
    {
        quote: "Zeropark has transformed our digital advertising game. With powerful targeting and easy campaign management, we've seen impressive ROI results. Highly recommend for any serious media buyer.",
        company: 'Digital Media Strategies, a Media Buying Agency',
        logo: DMS
    },
    {
        quote: 'Zeropark has been a great partner to us. Our ROI has increased as well as our spends. The quality control has been spot on and has provided us with high-quality traffic across innovative formats.',
        company: 'Ad Tech company',
        logo: Atech
    },
    {
        quote: "Zeropark has transformed our digital advertising game. With powerful targeting and easy campaign management, we've seen impressive ROI results. Highly recommend for any serious media buyer.",
        company: 'WebAds, digital media advertising network',
        logo: WebAds
    }
];

const Testimonials = () => {
    return (
        <div className="testimonials">
            <div className="testimonials__container max-width">
                <h2>Hear from our advertisers</h2>
                <div className="testimonials-list">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-item">
                            <p className="quote">{testimonial.quote}</p>
                            <div className="company">
                                <img src={testimonial.logo} alt={testimonial.company} className="company-logo" />
                                <p>{testimonial.company}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
