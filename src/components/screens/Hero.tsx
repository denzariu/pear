import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StickyElement from "./minis/StickyElement";
import InteractiveVideo from "./minis/InteractiveVideo";
import InteractiveLines from "./minis/InteractiveLines";
import { useEffect } from "react";
import Slices from "./Slices";


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

        <h2 className="font-bold text-white pt-32 pb-16 text-4xl sm:text-7xl max-w-screen-md text-center leading-[1.05] mx-8 lg:mx-auto">
          Innovation you can see, hear, and feel.
        </h2>

        <p className="font-semibold text-xl mx-8 sm:text-2xl text-[#86868b] sm:text-center pb-20 max-w-screen-md lg:mx-auto text-balance tracking-[0.011em]">
          <span className="text-white">Pushing boundaries from the inside out.</span> Spatial experiences on Apple Vision Pro are only possible through groundbreaking Apple technology. Displays the size of a postage stamp that deliver more pixels than a 4K TV to each eye. Incredible advances in Spatial Audio. A revolutionary dual‑chip design featuring custom Apple silicon. A sophisticated array of cameras and sensors. All the elements work together to create an unprecedented experience you have to see to believe.
        </p>
        
        <div className="h-full pt-12 sm:pt-28 lg:pt-0 w-full overflow-hidden ">
          <Slices/>
        </div>

        <h2 className="font-bold text-white pb-20 text-4xl text-center mx-8 lg:mx-auto">
          More pixels than a 4K TV. For each eye.
        </h2>
        <p className="font-semibold text-xl mx-8 sm:text-2xl text-[#86868b] sm:text-center pb-48 max-w-screen-md lg:mx-auto tracking-[0.011em]">
          The <span className="text-white">custom micro‑OLED display system</span> features 23 million pixels, delivering stunning resolution and colors. And a specially designed three‑element lens creates the feeling of a display that’s everywhere you look.
        </p>

        <div className="w-full bg-black overflow-hidden ">
          <InteractiveLines/>
        </div>

   
        <div className="h-full sm:h-[200vh] w-full bg-black overflow-hidden">
          <StickyElement/>
        </div>

        {/* Filler */}
        <div className="h-[2.5vh] w-full bg-red-200"></div> 
        <div className="h-[2.5vh] w-full bg-blue-200"></div> 
        <div className="h-[2.5vh] w-full bg-green-200"></div> 
        
        {/* Filler */}
        <div className="h-[85vh] w-full bg-white flex flex-col space-y-16 justify-center items-center">
          {/* <h1 className="text-7xl font-bold font-title text-black">Buy now.</h1> */}
          <h1 className="text-7xl xl:text-9xl font-bold font-title text-white px-2 bg-slate-900">Pear.</h1>

        </div> 
        
      </div>
    </>
  )
}

export default Landing
