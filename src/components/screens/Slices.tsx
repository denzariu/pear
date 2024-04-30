import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import P1 from '/src/assets/parts_0000.png'
import P2 from '/src/assets/parts_0002.png'
import P3 from '/src/assets/parts_0003.png'
import P4 from '/src/assets/parts_0004.png'
import P5 from '/src/assets/parts_0006.png'
import P6 from '/src/assets/parts_0007.png'

import PFrame from '/src/assets/parts_frame.png'

gsap.registerPlugin(ScrollTrigger);

const Slices = () => {
  const part1 = useRef(null);
  const part2 = useRef(null);
  const part3 = useRef(null);
  const part4 = useRef(null);
  const part5 = useRef(null);
  const part6 = useRef(null);
  const frame = useRef(null);

  const parent = useRef(null);

  // const difs = ["-90%", "-90%", "-70%", "-70%", "-50%", "-30%"]
  // const difs = ["-35vh", "-35vh", "-22.5vh", "-22.5vh", "-17.5vh", "-10vh"]
  const difs = ["-55vh", "-55vh", "-40vh", "-40vh", "-17.5vh", "-10vh"]


  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
  
      let timeline = gsap.timeline({ 
        scrollTrigger: {
          trigger: parent.current,
          start: "top 70%", //where it remains hooked, 20% recomm
          end: "bottom 0%",
          // end: "bottom -120%",
          // end: "+=3000",
          scrub: true,
          pin: true,
          markers: false
        } 
      });


      timeline.to(part1.current, {
        y: difs[0],
        duration: 6,
        delay: 2
      }, 'start')

      timeline.to(part2.current, {
        y: difs[1],

        duration: 6,
        delay: 2
      }, 'start')

      timeline.to(part3.current, {
        y: difs[2],
        duration: 6,
        delay: 2
      }, 'start')

      timeline.to(part4.current, {
        y: difs[3],
        duration: 6,
        delay: 2
      }, 'start')

      timeline.to(part5.current, {
        y: difs[4],
        duration: 6,
        delay: 2
      }, 'start')

      timeline.to(part6.current, {
        y: difs[4],
        duration: 6,
        delay: 2
      }, 'start')

    
    });

    return () => ctx.revert();
});


  return (
    <div ref={parent} className='h-[200vh]  mb-[-170vh] lg:mb-[-150vh] flex justify-center lg:scale-75'>

        <div className="flex justify-center h-fit w-[10%]  *:w-[75vw] *:absolute *:self-center ">
          <img src={P1} ref={part1}
            className="z-[52]"
          />
          <img src={P6} ref={part2}
            className="z-[48]"
          />
          
          <img src={P2} ref={part3}
            className="z-[51]"
          />

        
          {/* useless? */}
          <img src={P3} ref={part5}
            className="z-[49]"
          />

          <img src={P4} ref={part6}
            className="z-[50]"
          />
            <img src={P5} ref={part4}
            className="z-[49]"
          />
          
          <img src={PFrame} ref={frame}
            className="z-[53] mt-[-20%] "
          />
        </div>
        
       
        


    </div>
  );
}

export default Slices
