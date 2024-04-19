
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StickyImage = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: image,
        start: '-50% 80%', // Start animation when top of container reaches top of viewport
        end: '50% 20%', // End animation when bottom of container reaches top of viewport
        scrub: true, // Smooth scrubbing effect
        pin: true
        , // Pin the element during the animation
        markers: true
      },
    });

    // Animation to slowly reveal the image
    tl.fromTo(image, { opacity: 0 }, { opacity: 1, duration: 1, });

    // Animation to fade out the image
    tl.to(image, { opacity: 0, duration: 1, delay: 0.5,  });
  }, []);

  return (
    <div className="h-48 bg-red-200" ref={containerRef}>
      <div className="h-24 w-24 bg-red-500" ref={imageRef}/>

      {/* Additional content within the scroll container */}
    </div>
  );
};

export default StickyImage


{/* <img src="https://www.apple.com/v/apple-vision-pro/c/images/overview/hero/hero_endframe__dz973mndvu82_large.jpg" alt="Sticky Image" /> */}
