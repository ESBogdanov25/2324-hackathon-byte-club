import { useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { Link } from "react-router-dom";
 
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { link: "Map", path: "map" },
        { link: "AI Self Doctor", path: "ai-doctor" },
        { link: "Contact", path: "contact" },
    ];

    return (
        <>
            <nav className='bg-white md:px-18 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0'>
                <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
                    <div className='flex items-center'>
                        <a href="/" className='text-3xl font-semibold flex items-center space-x-3 text-primary'><span>Byte Club</span></a>
                    </div>

                    <div className='hidden md:flex space-x-12 items-center'>
                        {
                            navItems.map(({ link, path }) => (
                                <a key={link} href={path} className='block hover:text-gray-300 text-2xl'>{link}</a>
                            ))
                        }
                        <Link to="/mood" className='border-2 bg-indigo-600 rounded-xl p-3 text-white hover:bg-indigo-900'>
                            Boost Your Mood
                        </Link>
                    </div>

                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
                            {isMenuOpen ? (<FaXmark className='w-6 h-6 text-pink' />) : (<FaBars className='w-6 h-6 text-pink' />)}
                        </button>
                    </div>
                </div>
            </nav>

            <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-pink text-xl ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                    navItems.map(({ link, path }) => (
                        <a key={link} href={path} className='block hover:text-gray-300'>{link}</a>
                    ))
                }
            </div>
        </>
    )
}

export default Navbar;
