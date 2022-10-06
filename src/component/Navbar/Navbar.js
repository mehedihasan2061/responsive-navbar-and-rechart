import React, { useState } from 'react';
import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid";
import Link from '../Link/Link';

const Navbar = () => {
    const [open,setOpen]=useState(false)
    const routes = [
        {id:1,name:'Home',path:'/home'},
        {id:1,name:'Order',path:'/home'},
        {id:1,name:'Product',path:'/home'},
        {id:1,name:'Service',path:'/home'},
        {id:1,name:'About Us',path:'/home'},
    ]
    return (
      <nav className="w-full bg-purple-200">
        
        <div onClick={() => { setOpen(!open)}} className="h-6 w-6 md:hidden ">
          {
            open ? <XMarkIcon /> : <Bars3Icon />
          }
          
        </div>

        <ul
          className={`bg-purple-200 w-full md:flex justify-center absolute md:static duration-500 ease in ${open ? 'top-6': 'top-[-140px]' }`}>
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </nav>
    );
};

export default Navbar;