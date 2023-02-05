import { isAxiosError } from 'axios';
import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    const [nav,setNav] = useState(false);
    const [isOpen,setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen)
    const routes = [
      {
        path:"/",
        name:"Home"
      },
      {
        path:"/about",
        name:"About"
      },
      {
        path:"/blog",
        name:"Blog"
      },
      {
        path:"/allproducts",
        name:"Prodcuts"
      }
    ]
    
  return (
    <div className="w-screen h-10 sm:h-[65px] fixed z-50 backdrop-blur-md bg-cc-400 bg-opacity-50 rounded-b-lg text-white/80 ">
    <div className="px-3 flex justify-between sm:justify-around items-center w-full h-full sm:px-20">
      <div className="flex items-center">
        <h1 className=" text-xl font-semibold cursor-pointer mr-4 sm:text-xl text-white/80 tracking-tighter"><Link to="/">krish</Link></h1>
   
       <ul className="hidden items-center gap-4 sm:flex mx-2">
          <Link className="text-md hover:text-white/80" to="/about">About</Link>
          <Link className="text-md hover:text-white/80" to="/blog">Blog</Link>
       </ul>
       {/* <button onClick={handleClick} className='fixed flex flex-col gap-[3px] cursor-pointer mx-5 bg-gray-700 p-[5px] backdrop-blur-sm rounded-sm' onClick={handleClick}>
          <div className='w-5 h-[2px] bg-white/80 rounded-md'></div>
          <div className='w-5 h-[2px] bg-white/80 rounded-md'></div>
          <div className='w-5 h-[2px] bg-white/80 rounded-md'></div>
        </button> */}
        </div>
          {/* opening */}

          <div className="relative">
      <button onClick={handleClick} className="flex flex-col gap-[3px] cursor-pointer bg-gray-700 p-[5px] backdrop-blur-sm rounded-sm">
          <div className='w-5 h-[2px] bg-white/80 rounded-md'></div>
          <div className='w-5 h-[2px] bg-white/80 rounded-md'></div>
          <div className='w-5 h-[2px] bg-white/80 rounded-md'></div>
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-5 md:right-0 mt-2 w-32 rounded-md shadow-lg">
          <div className="py-1 rounded-md bg-white/90 backdrop-blur-lg shadow-xs transition ease-in-out duration-300">
            <section>
              {
                routes.map((route)=>{
                  return (
                    <NavLink to={route.path} key={route.name}>
                        <li className='text-gray-800 px-3 list-none hover:text-white/80'>{route.name}</li>
                    </NavLink>
                  )
                })
              }
            </section>
          </div>
        </div>
      )}
    </div>
           
            {/* closing*/}
        </div>
    </div>
  )
}

export default Navbar
