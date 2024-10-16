import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import search from '../../assets/icons/search.svg';
import arrow from '../../assets/icons/arrowDown.svg';
import menuIcon from '../../assets/icons/menu.svg'; // Add your hamburger menu icon
import closeIcon from '../../assets/icons/close.svg'; // Add your close icon here

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Toggle mobile menu
    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white shadow-md fixed w-full z-10">
            <div className="mx-auto flex justify-between items-center px-4 md:px-[160px] py-4">
                {/* Logo */}
                <div className="text-secondary font-bold text-3xl">
                    <Link to="/">
                        <img src={logo} alt="EWU" className="max-w-[56px] md:max-w-[86px] md:h-[56px]" />
                    </Link>
                </div>

                {/* Main Menu for larger screens */}
                <div className="hidden md:flex md:items-center md:space-x-6">
                    <Link to="/" className="text-secondary hover:font-bold text-nav">About</Link>
                    <Link to="/features" className="text-secondary hover:font-bold text-nav">Admission</Link>
                    <Link to="/pricing" className="text-secondary hover:font-bold text-nav">Notice</Link>
                    <Link to="/about" className="text-secondary hover:font-bold text-nav">Facilities</Link>
                    <Link to="/research" className="text-secondary hover:font-bold text-nav">Research</Link>
                    <Link to="/news" className="text-secondary hover:font-bold text-nav">News</Link>
                    <Link to="/events" className="text-secondary hover:font-bold text-nav">Events</Link>
                    <Link to="/others" className="text-secondary hover:font-bold text-nav">Others</Link>
                </div>

                {/* Search Icon */}
                <div className="hidden md:block">
                    <img src={search} alt="Search" className="w-5 h-5 mr-2"/>
                </div>

                {/* Login Button */}
                <div className="hidden md:block">
                    <Link to="/login">
                        <button className="flex items-center bg-secondary text-white font-bold py-2 px-3 rounded-md text-nav">
                            Log In
                            <img src={arrow} alt="Arrow Down" className="ml-2"/>
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button onClick={handleMobileMenuToggle}>
                    {isMobileMenuOpen ? (
                            <img src={closeIcon} alt="Close Menu" className="w-6 h-6" />
                        ) : (
                            <img src={menuIcon} alt="Menu" className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="flex flex-col items-start space-y-4 px-4 py-2">
                        <Link to="/" className="text-secondary hover:font-bold text-nav">About</Link>
                        <Link to="/features" className="text-secondary hover:font-bold text-nav">Admission</Link>
                        <Link to="/pricing" className="text-secondary hover:font-bold text-nav">Notice</Link>
                        <Link to="/about" className="text-secondary hover:font-bold text-nav">Facilities</Link>
                        <Link to="/research" className="text-secondary hover:font-bold text-nav">Research</Link>
                        <Link to="/news" className="text-secondary hover:font-bold text-nav">News</Link>
                        <Link to="/events" className="text-secondary hover:font-bold text-nav">Events</Link>
                        <Link to="/others" className="text-secondary hover:font-bold text-nav">Others</Link>

                        <div className="flex items-center space-x-4 mt-4">
                            <img src={search} alt="Search" className="w-5 h-5" />
                            <Link to="/login">
                                <button className="flex items-center bg-secondary text-white font-bold py-2 px-3 rounded-md text-nav">
                                    Log In
                                    <img src={arrow} alt="Arrow Down" className="ml-2"/>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
