import React from 'react';
import logo from './../../assets/img/white-logo.png'; // Update the path to your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="bg-secondary py-10 px-4 md:py-[100px] md:px-[160px] text-white">
            <div className="flex flex-wrap justify-between gap-8 md:gap-10">
                {/* Logo & Description */}
                <div className="flex-1">
                    <img src={logo} alt="logo" className="mb-4 w-[120px] md:w-auto" />
                    <p className="footer-item text-sm md:text-base">
                        A leading private institution in Bangladesh, dedicated to academic excellence and innovative
                        research.
                    </p>
                    <button className="cta mt-4 md:mt-6 bg-white text-secondary px-4 py-2 rounded">
                        Apply for Admission
                    </button>
                </div>

                {/* Contact Section */}
                <div className="flex-1">
                    <h3 className="footer-heading text-lg md:text-xl">Contact</h3>
                    <ul>
                        <li className="footer-item text-sm md:text-base">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                            A/2, Jahurul Islam Avenue Jahurul Islam City, Aftabnagar Dhaka-1212, Bangladesh
                        </li>
                        <li className="footer-item text-sm md:text-base">
                            <FontAwesomeIcon icon={faPhone} className="mr-2" />
                            01851933094
                        </li>
                        <li className="footer-item text-sm md:text-base">
                            <FontAwesomeIcon icon={faPhone} className="mr-2" /> 01755587224
                        </li>
                        <li className="footer-item text-sm md:text-base">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> admissions@ewubd.edu
                        </li>
                        <li className="footer-item text-sm md:text-base">
                            <FontAwesomeIcon icon={faGlobe} className="mr-2" /> info@ewubd.edu
                        </li>
                    </ul>
                </div>

                {/* Student Section */}
                <div className="flex-1">
                    <h3 className="footer-heading text-lg md:text-xl">Student</h3>
                    <ul>
                        <li className="footer-item text-sm md:text-base">Academic Calendar</li>
                        <li className="footer-item text-sm md:text-base">Campus Life</li>
                        <li className="footer-item text-sm md:text-base">Payment Procedure</li>
                        <li className="footer-item text-sm md:text-base">Convocation</li>
                        <li className="footer-item text-sm md:text-base">Rules & Regulation</li>
                        <li className="footer-item text-sm md:text-base">Faculty Search</li>
                        <li className="footer-item text-sm md:text-base">Grading Policy</li>
                    </ul>
                </div>

                {/* University Section */}
                <div className="flex-1">
                    <h3 className="footer-heading text-lg md:text-xl">University</h3>
                    <ul>
                        <li className="footer-item text-sm md:text-base">Directory</li>
                        <li className="footer-item text-sm md:text-base">Proctor Schedule</li>
                        <li className="footer-item text-sm md:text-base">E-Tender</li>
                        <li className="footer-item text-sm md:text-base">Procurement</li>
                        <li className="footer-item text-sm md:text-base">Gallery</li>
                        <li className="footer-item text-sm md:text-base">Journal and Publications</li>
                        <li className="footer-item text-sm md:text-base">Archives</li>
                    </ul>
                </div>

                {/* Quick Links Section */}
                <div className="flex-1">
                    <h3 className="footer-heading text-lg md:text-xl">Quick Link</h3>
                    <ul>
                        <li className="footer-item text-sm md:text-base">UGC Guidelines</li>
                        <li className="footer-item text-sm md:text-base">Apply Online</li>
                        <li className="footer-item text-sm md:text-base">Jobs at EWU</li>
                        <li className="footer-item text-sm md:text-base">Degree Verification</li>
                    </ul>
                </div>
            </div>

            {/* Divider */}
            <div className="py-8 md:py-[80px]">
                <div className="h-[2px] w-full bg-white"></div>
            </div>

            {/* Footer Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-white font-bold text-sm md:text-list-item">Copyright@ 2024 East West University</p>

                <div className="social-media-links flex space-x-4 mt-4 md:mt-0 text-list-item">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
