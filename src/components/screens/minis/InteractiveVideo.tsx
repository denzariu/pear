import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const InteractiveVideo = () => {
  const link = useState("https://cdn-cf-east.streamable.com/video/mp4/hm26qb.mp4?Expires=1713983964471&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=IJEaiiqRidQ~-s25dhljOKTiVAU2bi76lgZTJQAM2YogbxM~qy6g5o3eDe0fsvfhRZCIL6cLMV4tKv68uZHBq09q3tquG-GDzCKpOJ~vXhQa5IqK3UuNNnq1A8WCONo8MGahYRTjQTZPUELFGO28m87hKfwqIFmPvhZs9Mmf~Kx2sz4xgFmpwj1o2opIFNUKPF6c-YS6EdcF8b29BqrcLrDpUU9Ll1FgrBzdQbCCk13j9Bfc5eOHK1sZKiG057tZzG0cfm4HbVDV84-SmSYh~RDWTYzFeEl3DaTB0KK7q2QcEuabs2tKVUD-JH5yJ7DWd1aF5YVveGZ29b2Zgyiwcg__")

  const parent = useRef(null);
  const title = useRef(null);
  const black = useRef(null);
  const video = useRef(null);


  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
  

      let timeline = gsap.timeline({ 
        scrollTrigger: {
          trigger: parent.current,
          start: "top 0%", //where it remains hooked, 20% recomm
          end: "+=1400",
          scrub: true,
          pin: true,
          markers: false,
        } 
      });

      timeline.to([title.current, black.current], {
        opacity: 0,
        duration: 6
      })

      timeline.to(video.current, {
          opacity: 1,
          duration: 4,
          delay: 18,
      })
      timeline.to(video.current, {
          opacity: 1,
          duration: 12,
          delay: 0,
          scale: 0.75,
      })
     
    });

    return () => ctx.revert();
});


  return (
    <>
    {/* Video */}
    <div ref={parent} className='h-[100vh] sm:h-[100vh] bg-black-200 font-title font-semibold flex justify-between overflow-hidden flex-col '>
      
      <div className='absolute top-[5%] left-[5%] h-screen w-screen'>
        <div className=' h-[90%] w-[90%] bg-red-200 top-0 bottom-0 left-0 right-0 rounded-3xl'></div>
      </div>
      <div className='absolute top-[7.5%] left-[7.5%] h-screen w-screen'>
        <div className=' h-[85%] w-[85%] bg-blue-200 top-0 bottom-0 left-0 right-0 rounded-3xl'></div>
      </div>
      <div className='absolute top-[10%] left-[10%] h-screen w-screen'>
        <div className=' h-[80%] w-[80%] bg-green-200 top-0 bottom-0 left-0 right-0 rounded-3xl'></div>
      </div>

      <video ref={video}
        className="h-screen w-full bg-black rounded-3xl"
        muted 
        loop
        autoPlay={true}
        src={link[0]}
      />
      <div ref={black} className='absolute top-0 bottom-0 left-0 right-0 bg-black opacity-60'/>
  
    </div>

    {/* Overlay / Title */}
    <div ref={title} className='absolute bottom-[15%] sm:bottom-[10rem] font-bold text-xl sm:text-2xl xl:text-4xl text-white left-0 right-0 items-center flex flex-col '>
      <div className='flex items-end'>
        
        <svg className='self-start w-[1.75rem] h-[1.75rem] -mr-[0.075rem] mb-[0.125rem] sm:mb-0 sm:mr-0 sm:w-10 sm:h-10 xl:w-12 xl:h-12' xmlns="http://www.w3.org/2000/svg" version="1.0"  viewBox="0 0 871 1280" >
          <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
          <path d="M5840 12710 c-467 -41 -936 -281 -1235 -629 -272 -319 -436 -718 -452 -1103 -6 -125 -5 -127 19 -151 18 -18 41 -27 82 -32 70 -9 288 10 415 36 786 160 1370 826 1431 1632 19 252 0 270 -260 247z"/>
          <path d="M4174 10521 c-2 -3 -19 -6 -37 -7 -90 -8 -138 -15 -162 -24 -15 -6 -31 -8 -35 -5 -5 3 -25 -1 -44 -9 -19 -8 -36 -12 -39 -10 -2 3 -17 -1 -33 -7 -16 -7 -32 -12 -36 -11 -4 1 -57 -16 -116 -37 -294 -105 -547 -265 -772 -491 -237 -236 -403 -504 -505 -814 -68 -204 -83 -294 -115 -671 -16 -196 -93 -486 -225 -855 -137 -382 -217 -530 -628 -1151 -394 -596 -548 -882 -652 -1214 -21 -66 -52 -160 -70 -210 -47 -129 -65 -291 -65 -595 0 -465 50 -787 187 -1205 306 -931 987 -1721 1867 -2161 285 -142 430 -178 721 -177 99 1 243 8 320 17 77 8 205 23 285 32 243 27 487 22 825 -17 328 -37 608 -45 745 -20 115 20 253 67 388 132 868 413 1571 1185 1896 2082 98 269 173 575 182 744 6 92 5 93 -23 122 -22 21 -43 30 -84 36 -29 3 -67 11 -84 15 -16 5 -70 14 -120 20 -49 7 -145 25 -213 41 -648 157 -1185 585 -1482 1181 -162 326 -234 634 -234 1003 0 360 69 660 223 980 93 193 221 383 369 546 106 117 122 145 122 212 0 32 -9 93 -19 135 -35 137 -50 239 -61 400 -6 86 -17 200 -26 252 -107 671 -542 1253 -1160 1550 -104 50 -317 128 -364 133 -14 2 -31 6 -37 10 -5 3 -28 9 -49 11 -21 3 -54 10 -73 15 -19 6 -38 8 -42 5 -5 -3 -28 0 -51 7 -40 11 -464 20 -474 10z"/>
          </g>
        </svg>
        <p className=''>Pear</p> 
      </div>
      <p className='text-3xl sm:text-4xl xl:text-7xl px-4 '>Vision Pro</p>
    </div>

    </>
  );
}

export default InteractiveVideo
