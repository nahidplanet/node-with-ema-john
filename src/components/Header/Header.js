import React, { useState } from 'react';
import { MenuIcon ,XIcon} from '@heroicons/react/solid';
import logo from "../../images/Logo.svg"
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
  const [navbarOpen,setNavbarOpen] = useState();
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#0F172A]">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <CustomLink
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              to={'/'}
            >
              <img className='w-20 md:w-auto' src={logo} alt="" />
            </CustomLink>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {
                navbarOpen? <XIcon className='text-white w-6 h-6'></XIcon>: <MenuIcon className='text-white w-6 h-6'></MenuIcon> 
                
              }
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <CustomLink
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to={'/shop'}
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Shop</span>
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to={'/review'}
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Order Review</span>
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to={'/inventory'}
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Manage Inventory</span>
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to={'/singin'}
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Login</span>
                </CustomLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;