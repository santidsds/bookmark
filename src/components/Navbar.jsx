import React, {useState} from 'react'
import logo from '../assets/logo-bookmark.svg'
import hamMenu from '../assets/icon-hamburger.svg'
import closeMenu from '../assets/icon-close.svg'

import facebook from '../assets/icon-facebook.svg'
import twitter from '../assets/icon-twitter.svg'

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggle = () => {
      setMenuOpen(prev => !prev)
  }

  return (
    <div className=' 
        flex justify-between items-center p-8 h-[10vh] font-Rubik
        lg:py-12 lg:px-[2.5em]
        xl:px-[4em]
        2xl:px-[8.5em]
        hd:px-[12em]
        3xl:px-[16.8em] '>
        
        {/* left icon */}
        <div className={` ${isMenuOpen ? 'translate-y-[-10em]' : 'translate-y-0'} transition-all ease-in-out duration-700`}>
            <a href="#"><img className='cursor-pointer lg:scale-75 hd:scale-110 hd:ml-8' src={logo} alt="" /></a>
        </div>

        {/* Ul */}
        <div className='
        hidden lg:flex gap-10 text-[0.8em] mr-10
        lg:text-[0.7em]
        hd:text-[1em]'>
            <button className='hover:text-softRed'>FEATURES</button>
            <button className='hover:text-softRed'>PRICING</button>
            <button className='hover:text-softRed'>CONTACT</button>
          <button className='bg-softRed p-2 text-white rounded-lg w-24 hover:border-softRed hover:bg-white hover:border-2 hover:text-softRed'>LOGIN</button>
        </div>


        {/* Ham Menu */}
        <div className='text-white lg:hidden'>
            <img onClick={toggle} className={` ${ isMenuOpen ? 'translate-y-[-10em]' : 'translate-y-0' } cursor-pointer transition-all ease-in-out duration-700 `} src={hamMenu}/>

            <div className={`${isMenuOpen ? 'translate-y-0' : 'translate-y-[-200vh]'} fixed z-50 left-0 top-0 bg-veryDarkBlue opacity-95 h-screen w-screen transition-all ease-in-out duration-500 `}>
              <div className={` ${isMenuOpen ? 'opacity-100' : 'opacity-0'} flex justify-end px-8 py-12 transition-all ease-in-out `}>
                <img src={closeMenu} onClick={toggle} className='w-4.5 h-4 cursor-pointer' />
              </div>

              <div className='flex flex-col items-center
              px-8'>
                <div className=' w-full p-4 
                text-center text-[1.2em] border-t-[1px] border-b-[1px] border-grayishBlue border-opacity-20 cursor-pointer tracking-widest'>FEATURES</div>
                <div className=' w-full p-4 
                text-center text-[1.2em] border-t-[1px] border-b-[1px] border-grayishBlue border-opacity-20 cursor-pointer tracking-widest'>PRICING</div>
                <div className=' w-full p-4 
                text-center text-[1.2em] border-t-[1px] border-b-[1px] border-grayishBlue border-opacity-20 cursor-pointer tracking-widest'>CONTACT</div>
                
                <button className=' mt-5 py-2 w-full
                border-white border-2 
                text-[1.2em] 
                rounded-md tracking-widest 
                transition-all ease-in-out'>LOGIN</button>
              </div>

              <div className='absolute right-8 bottom-0 mb-16 
              flex gap-8 
              w-full mx-auto translate-x-1/2 '>
                <img className='cursor-pointer 
                transition-all ease-in-out' src={facebook} alt="" />

                <img className='cursor-pointer 
                transition-all ease-in-out' src={twitter} alt="" />
              </div>
            </div>
        </div>

    </div>
  )
}

export default Navbar