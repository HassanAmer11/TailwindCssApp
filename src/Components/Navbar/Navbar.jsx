import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      <nav className=" bg-main text-white py-6 px-5 sm:px-0 uppercase shadow-2xl fixed top-0 end-0 start-0 z-50">
        <div className="container">
          <div className="flex justify-between flex-wrap md:flex-nowrap">
            <h2 className="font-bold text-2xl md:text-3xl">
              <Link to={"/"}>Start Framework</Link>
            </h2>
            <button
              className="px-3 py-2 border rounded shadow-2xl text-slate-400 md:hidden cursor-pointer"
              onClick={() => setisOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <ul
              className={`${
                isOpen ? "flex-wrap md:flex-nowrap md:flex" : "hidden md:flex"
              }  gap-5 font-bold pt-4 space-y-4 md:space-y-0 md:pt-0 justify-items-center basis-full md:basis-0 `}
            >
              <li className='w-full md:w-auto'>
                <NavLink className="py-2 px-3 block md:inline-block" to={"/about"}>About</NavLink>
              </li>
              <li className='w-full md:w-auto'>
                <NavLink className="py-2 px-3 block md:inline-block" to={"/portfolio"}> Portfolio</NavLink>
              </li>
              <li className='w-full md:w-auto'>
                <NavLink  className="py-2 px-3 block md:inline-block" to={"/contact"}> Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
