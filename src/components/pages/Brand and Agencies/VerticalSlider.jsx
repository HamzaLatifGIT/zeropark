import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style/VerticalSlider.scss';  // Ensure to import your styling

gsap.registerPlugin(ScrollTrigger);

const VerticalSlider = () => {
  const imagesRef = useRef([]);
  const textRef = useRef(null);

  useEffect(() => {
    // GSAP animation for images
    gsap.to(imagesRef.current, {
      xPercent: -100 * (imagesRef.current.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: textRef.current, // Trigger the scroll on the textRef instead of images
        pin: true,
        scrub: 1,
        snap: 1 / (imagesRef.current.length - 1),
        start: "top top", // Start when the text container reaches the top of the viewport
        end: "+=3000",    // Adjust the end to ensure enough scrolling
      },
    });

    // GSAP animation for text opacity and position
    gsap.utils.toArray(textRef.current.children).forEach((el, index) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 50 }, 
        { 
          opacity: 1, 
          y: 0, 
          scrollTrigger: {
            trigger: textRef.current,
            start: "top top+=200", 
            end: "bottom top",
            scrub: true,
            toggleActions: "play reverse play reverse", // Smooth animation toggle
          }
        });
    });
  }, []);

  return (
    <div className="carousel-container">
      <div className="images" ref={imagesRef}>
        {['image1.png', 'image2.png', 'image3.png'].map((src, index) => (
          <div className="image" key={index}>
            <img src={src} alt={`carousel-${index}`} />
          </div>
        ))}
      </div>
      <div className="text" ref={textRef}>
        <h2>Drive future-proof performance to your brand</h2>
        <h2>KPI deliverability</h2>
        <h2>Performance that scales</h2>
        <h2>Incremental growth</h2>
      </div>
    </div>
  );
};

export default VerticalSlider;
