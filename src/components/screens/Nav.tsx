
function Nav() {
  
  return (
    <div className='fixed backdrop-blur-md  w-full h-16 z-[200] flex justify-center select-none'>
      <div className='p-8 w-[980px] flex justify-between items-center'>
        <a className='text-white font-title font-semibold text-2xl' href='https://denzariu.github.io'>Pear Vision Pro</a>
        <span className='flex items-center'>
          <ul className='hidden md:flex flex-row gap-6 items-center'>
            <li role='link' className='text-white hover:text-blue-500'><a href='#'>Overview</a></li>
            <li className='text-white hover:text-blue-500'><a>Guided Tour</a></li>
            <li className='text-white hover:text-blue-500'><a>Tech Specs</a></li>
            <li className='text-white hover:bg-white hover:text-black py-[0.125rem] px-2 border-2 border-white rounded-full'><a>Book a demo</a></li>
          </ul>
          <a className='bg-blue-600 py-[0.125rem] px-4 ml-6 text-center rounded-full text-white transition-color hover:bg-blue-500'>Buy</a>
        </span>
      </div>
    </div>
  )
}

export default Nav
