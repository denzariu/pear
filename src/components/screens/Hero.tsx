import { useLayoutEffect, useRef } from "react";
// import { ScrollTrigger, Tween } from "react-gsap"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StickyElement from "./minis/StickyElement";


gsap.registerPlugin(ScrollTrigger)


const Landing = () => {

  

  // useLayoutEffect(() => {
    // gsap.fromTo(el, {scale: 1}, {scale: 2,scrollTrigger: {
    //   trigger: el,
    // }})

    // gsap.timeline({
    //   scrollTrigger: {
    //     trigger: imageRef.current,
    //     start: '-200px 90%',
    //     end: '800px 10%',
    //     scrub: true,
    //     // toggleActions: 'play reverse play reverse',
    //     markers: true,
    //   }
    // }).fromTo(imageRef.current, {
    //   scale: 0.75,
    //   display: 'hidden'
    // },{
    //   scale: 1,
    //   display: 'flex',
    // })
    // .to(imageRef.current, {
    //   scale: 0,
    //   display: 'hidden',

    // })


    //Text
    // gsap.timeline({
    //   scrollTrigger: {
    //     trigger: imageRef.current,
    //     start: '-200px 90%',
    //     end: '800px 10%',
    //     scrub: true,
    //     // toggleActions: 'play reverse play reverse',
    //     markers: true,
    //   }
    // }).fromTo(imageRef.current, {
    //   scale: 0.75,
    //   display: 'hidden'
    // },{
    //   scale: 1,
    //   display: 'flex',
    // })
    // .to(imageRef.current, {
    //   scale: 0,
    //   display: 'hidden',

    // })

    //Appear then disappear
    //   gsap.timeline({
    //   scrollTrigger: {
    //     trigger: parentRef.current,
    //     start: 'center center',
    //     end: 'bottom center',
    //     scrub: false,
    //     toggleActions: 'play reverse play reverse',
    //     markers: true
    //   }
    // }).fromTo(imageRef.current, {
    //   scale: 0
    // },{
    //   scale: 1,
    //   opacity: 1,
    //   display: 'flex'
    // })

  // }, [])

  return (
    <>
      <section id='#' className='bg-black h-full w-full overflow-hidden' >
        
        {/* Filler */}
        {/* <div className="h-[1600px] w-full bg-slate-900"></div>  */}
        <div className="h-full sm:h-[200vh] w-full bg-blue-200 overflow-hidden ">
          <StickyElement/>
        </div>

        {/* <div className="h-full sm:h-full w-full bg-blue-200 overflow-hidden border-b-[24px] border-green-200">
          <StickyElement/>
        </div>
        
        <div className="h-full sm:h-full w-full bg-green-200 overflow-hidden border-b-[24px] border-green-200">
          <StickyElement/>
        </div> */}
        
        {/* Filler */}
        <div className="h-[2.5vh] w-full bg-red-200"></div> 
        <div className="h-[2.5vh] w-full bg-green-200"></div> 
        
        {/* Filler */}
        <div className="h-[90vh] w-full bg-white flex flex-col space-y-16 justify-center items-center">
          {/* <h1 className="text-7xl font-bold font-title text-black">Buy now.</h1> */}
          <h1 className="text-7xl xl:text-9xl font-bold font-title text-white px-2 bg-slate-900">Pear.</h1>

        </div> 
        
        {/* <div className="h-[1600px] w-full bg-slate-900">
          <StickyElement/>
        </div> 
        <div className="h-[1600px] w-full bg-slate-900">
          <StickyElement/>
        </div>  */}

        
      </section>





      {/* <ScrollTrigger start="50% center" end="100% center" scrub={0} markers >

          <div className="bg-black h-screen flex justify-center items-end">
            <Tween
            onlyInvalidateTo
            target={imageRef.current}
            from={{
              y: 350,
              scale: 1
            }}
            to={{
              y: 0,
              scale: 0.75
            }}
          >
            <img src='https://www.apple.com/v/apple-vision-pro/c/images/overview/hero/hero_endframe__dz973mndvu82_large.jpg'
              className="object-contain lg:max-w-lg "
            />
            <p ref={imageRef.current}
              className="h-[2000px]"
            ></p>

          </Tween>

          </div>
        </div>

      </ScrollTrigger>

      {/* TOO BIG 
      <div className="h-[2000px] w-full bg-red-200 z-20"></div> */}
    </>
  )
}

export default Landing
