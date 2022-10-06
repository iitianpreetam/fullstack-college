import { useState } from 'react';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    const [menuBtnClicked, setMenuBtnClicked] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const menuItems = (
        <>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Blog</li>
            <li className='cursor-pointer'>About</li>
            {
                isAuthenticated ? 
                    <li className='cursor-pointer' onClick={() => setIsAuthenticated(false)}>
                        <span className='bg-red-400 w-auto py-1.5 px-3 rounded-md'>
                            Logout
                        </span>
                    </li> :
                <li className='cursor-pointer' onClick={() => setIsAuthenticated(true)}>
                    <span className='bg-green-500 w-auto py-1.5 px-3 rounded-md'>
                        Login/Register
                    </span>
                </li>
            }
        </>
    );
    const sideMenu = (
        <div className='fixed top-0 right-0 bottom-0 w-[70%] shadow-lg z-10 bg-gray-100'>
            <div className='flex h-12 items-center justify-between px-5'>
                <div></div>
                <XMarkIcon className='h-8' onClick={() => setMenuBtnClicked(!menuBtnClicked)}/>
            </div>
            <div className='px-5'>
                <ul className='flex flex-col space-y-3 text-lg font-semibold'>
                    {menuItems}
                </ul>
            </div>
        </div>
    );
    return(
        <nav className='flex h-12 items-center justify-between px-5
        md:px-20 lg:px-40 shadow-md'
        >
            <div 
                className="text-xl text-red-600 font-bold"
            >
                FullStack College
            </div>
            <div>
                <ul className='hidden md:flex space-x-8 font-semibold text-lg'>
                    {menuItems}
                    <MagnifyingGlassIcon className='h-8' />
                </ul>
            </div>
            <Bars3Icon className='h-8 md:hidden' onClick={() => setMenuBtnClicked(!menuBtnClicked)}/>
            {menuBtnClicked && sideMenu}
        </nav>
    );
};

export default Navbar;