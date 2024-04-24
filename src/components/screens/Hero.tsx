import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StickyElement from "./minis/StickyElement";
import InteractiveVideo from "./minis/InteractiveVideo";
import InteractiveLines from "./minis/InteractiveLines";
import { useEffect } from "react";


gsap.registerPlugin(ScrollTrigger)


const Landing = () => {

  // Smooth Scroll
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      <div className='bg-black h-full w-full overflow-hidden' >
        
        {/* Use as Filler */}
        {/* <div className="h-[1600px] w-full bg-slate-900"></div>  */}

        <InteractiveVideo/>

        <div className="h-full  w-full bg-blue-200 overflow-hidden ">
          <InteractiveLines/>
        </div>
   
        <div className="h-full sm:h-[200vh] w-full bg-blue-200 overflow-hidden">
          <StickyElement/>
        </div>

        {/* Filler */}
        <div className="h-[2.5vh] w-full bg-red-200"></div> 
        <div className="h-[2.5vh] w-full bg-green-200"></div> 
        
        {/* Filler */}
        <div className="h-[90vh] w-full bg-white flex flex-col space-y-16 justify-center items-center">
          {/* <h1 className="text-7xl font-bold font-title text-black">Buy now.</h1> */}
          <h1 className="text-7xl xl:text-9xl font-bold font-title text-white px-2 bg-slate-900">Pear.</h1>

        </div> 
        
      </div>
    </>
  )
}

export default Landing
