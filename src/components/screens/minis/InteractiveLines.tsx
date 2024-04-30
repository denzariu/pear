import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const InteractiveLines = () => {
  const l1 = useRef(null);
  const l2 = useRef(null);
  const l3 = useRef(null);
  const parent = useRef(null);



  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
  

      let timeline = gsap.timeline({ 
        scrollTrigger: {
          trigger: parent.current,
          start: "0% 120%", //where it remains hooked, 20% recomm
          end: "0 00%",
          scrub: true,
          pin: false,
          markers: false
        } 
      });



      timeline.fromTo(l1.current, {
        opacity: 1,
        x: '110vw'
      }, {
        x: '0',
        opacity: 1,
        duration: 80,
        delay: 40
      })

      timeline.fromTo(l2.current, {
        opacity: 1,
        x: '-110vw'
      }, {
        x: '0',
        opacity: 1,
        duration: 80,
        delay: 0
      })

      timeline.fromTo(l3.current, {
        opacity: 1,
        x: '110vw'
      }, {
        x: '0',
        opacity: 1,
        duration: 80,
        delay: 0
      })
      
    });

    return () => ctx.revert();
});


  return (
    <section ref={parent} className=' h-screen w-full sm:h-[90%]  font-title font-semibold overflow-hidden'>
      
      {/* Vertical Lines */}

      <div className='*:p-4 *:mb-32 *:rounded-full *:w-[120%] *:-ml-[10%] *:opacity-0 text-center z-20 flex flex-col '>
        
        <div className="h-fit w-full bg-red-200 text-xl sm:text-3xl xl:text-5xl flex justify-center" ref={l1}>
          <p className='w-[80%] sm:max-w-[640px] md:max-w-[680px] xl:max-w-[980px]'>Pear Vision Pro seamlessly blends digital content with your physical space.</p>
        </div>
        
        <div className="h-fit w-full bg-blue-200 text-xl sm:text-3xl xl:text-5xl flex justify-center" ref={l2}>
          <p className='w-[80%] sm:max-w-[640px] md:max-w-[680px] xl:max-w-[980px]'>You navigate simply by using your eyes, hands, and voice.</p>
        </div>
       
        <div className="h-fit w-full bg-green-200 text-xl sm:text-3xl xl:text-5xl flex justify-center" ref={l3}>
          <p className='w-[80%] sm:max-w-[640px] md:max-w-[680px] xl:max-w-[980px]'>So you can do the things you love in ways never before possible.</p>
        </div>
      </div>
      
  
    </section>
  );
}

export default InteractiveLines
