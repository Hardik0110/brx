import React, { useState, useEffect }  from 'react'
import Hamburger from 'hamburger-react'

function Navbar() {
    const [isOpen, setOpen] = useState(false)
    const [isTopOfPage, setIsTpOfPage] = useState(true);

    useEffect (() =>{
        const handleScroll = ()=>{
        if(window.scrollY === 0){ 
            setIsTpOfPage(true)
            console.log(isTopOfPage)
        };
        if(window.scrollY !== 0) setIsTpOfPage(false);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <section className='navbar'>
    <div className={` ${isTopOfPage ? "": "bg-[#FF9913]"} md:px-8 sm:px-8 z-40 w-full fixed top-0 pt-4 pb-2 transition duration-300`}>
        <nav className='flex items-center justify-between'>
            <a className="logo w-[80px] h-[80px]" href='/'>
                <img  src='/logo.png' alt="logo" />
            </a>
            <div className={`nav-list lg:block absolute right-10 lg:relative lg:top-0 transition-all duration-100 ease-in ${isOpen ? "top-[50px]":"top-[-100px]"}`}>
                <ul className={`flex text-maroon-300  ${isOpen? "flex-col space-y-5": "flex-row space-x-6"}`}>
                    <li className='hover:text-[#21209C] transition-all duration-200 ease-in cursor-pointer text-[20px] bold'><a href="#about">About</a></li>
                    <li className='hover:text-[#21209C] transition-all duration-200 ease-in cursor-pointer text-[20px] bold'><a href="#projects">Robots</a></li>
                    <li className='hover:text-[#21209C] transition-all duration-200 ease-in cursor-pointer text-[20px] bold'><a href="#technologies">Technologies</a></li>
                    <li className='hover:text-[#21209C] transition-all duration-200 ease-in cursor-pointer text-[20px] bold'><a href="#testimonials">Testimonials</a></li>
                    <li className='hover:text-[#21209C] transition-all duration-200 ease-in cursor-pointer text-[20px] bold'><a href="#contact">Contact Us</a></li>
                </ul>
            </div>
            <div className='lg:hidden block'>
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
        </nav>
    </div>
    </section>
  )
}

export default Navbar