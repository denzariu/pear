import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const StickyElement = () => {
  const square1 = useRef(null);
  const square2 = useRef(null);
  const square3 = useRef(null);
  const parent = useRef(null);

  const phone = useRef(null);
  const bg = useRef(null);


  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
  
      let timeline = gsap.timeline({ 
        scrollTrigger: {
          trigger: parent.current,
          start: "-30vh -30vh", //where it remains hooked, 20% recomm
          // end: "+=3000",
          scrub: true,
          pin: true,
          markers: false
        } 
      });



    
      timeline.to(phone.current, {
          opacity: 1,
          duration: 8,
          delay: 0,
      })

      timeline.fromTo(square1.current, {
        opacity: 0,
        x: '75vw'
      }, {
        x: '45vw',
        opacity: 1,
        duration: 6,
        delay: 2
      })

      timeline.to(square2.current, {
        x: '35vw',
        opacity: 1,
        duration: 6,
        delay: 2
      })

      timeline.fromTo(square3.current, {
        opacity: 0,
        x: '75vw'
      }, {
        x: '40vw',
        opacity: 1,
        duration: 6,
        delay: 6
      })
      timeline.to(phone.current, {
        opacity: 0,
        duration: 6,
        delay: 6
      })
      timeline.to(bg.current, {
        opacity: 0,
        duration: 6,
        delay: 6
      })

    });

    return () => ctx.revert();
});


  return (
    <div ref={parent} className='h-[100vh] sm:h-[200vh] font-title font-semibold flex justify-between overflow-hidden'>
      
      <div className='*:p-2 *:opacity-0 z-20 mt-40 ml-[-25%] sm:ml-0'>
        <div className="h-fit w-full  bg-red-200  text-2xl sm:text-5xl 2xl:text-7xl" ref={square1}>
          <p>it's pretty.</p>
        </div>
        <div className="h-fit w-full bg-blue-200 text-2xl sm:text-5xl 2xl:text-7xl" ref={square2}>
          <p>it's powerful.</p>
        </div>
        <div className="h-fit w-full bg-green-200 text-2xl sm:text-5xl 2xl:text-7xl" ref={square3}>
          <p>it's yours.</p>
        </div>
      </div>
      <div className='h-[100vh] sm:left-0  w-[100%] absolute bg-black opacity-0 z-0' ref={phone}>
        <div className='absolute top-0 bottom-0 w-max'>
          <img  src='https://www.apple.com/v/apple-vision-pro/c/images/overview/hero/hero_endframe__dz973mndvu82_large.jpg'
              className="relative sm:left-[-10%] h-[100%] object-contain self-end "
            />
        </div>
      </div>

    </div>
  );
}

export default StickyElement
