import React from 'react';

import img1 from '../../assets/img/journey/1.png';
import img2 from '../../assets/img/journey/2.png';
import img3 from '../../assets/img/journey/3.png';
import img4 from '../../assets/img/journey/4.png';
import img5 from '../../assets/img/journey/5.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';

const Journey = () => {
    return (
        <section className="wrapper bg-accent text-white">

            <div className="text-[30px] md:text-[30px] lg:text-[70px] mb-[60px]">
                <h2 className="font-medium">Your Journey to </h2>
                <h2 className="font-black text-[#FEB7AC] italic">Excellence Starts Here</h2>
            </div>

            <div className="grid grid-cols-12 md:gap-[50px]">
                <div className="col-span-7 flex justify-between flex-col">
                    <div className="w-10/12 flex flex-wrap gap-5">

                        <span className="text-[24px] flex gap-5 items-center">
                            <FontAwesomeIcon icon={faCircleArrowUp} className="text-[#FEB7AC] transform rotate-45" /> <span>Accommodating</span>
                        </span>

                        <span className="text-[24px] flex gap-5 items-center">
                            <FontAwesomeIcon icon={faCircleArrowUp} className="text-[#FEB7AC] transform rotate-45" /> <span>Transportation</span>
                        </span>

                        <span className="text-[24px] flex gap-5 items-center">
                            <FontAwesomeIcon icon={faCircleArrowUp} className="text-[#FEB7AC] transform rotate-45" /> <span>Library</span>
                        </span>

                        <span className="text-[24px] flex gap-5 items-center">
                            <FontAwesomeIcon icon={faCircleArrowUp} className="text-[#FEB7AC] transform rotate-45" /> <span>One student one laptop</span>
                        </span>

                        <span className="text-[24px] flex gap-5 items-center">
                            <FontAwesomeIcon icon={faCircleArrowUp} className="text-[#FEB7AC] transform rotate-45" /> <span>Blended Learning Platform</span>
                        </span>

                        <span className="text-[24px] flex gap-5 items-center">
                            <FontAwesomeIcon icon={faCircleArrowUp} className="text-[#FEB7AC] transform rotate-45" /> <span>Sports Club</span>
                        </span>

                    </div>
                    <div className="flex md:justify-end">
                        <img src={img2} className="w-full md:w-10/12" alt="" />
                    </div>

                </div>
                <div className="col-span-5 flex flex-col gap-[40px]">
                    <img src={img1} className="w-full mt-5 mb:mt-0" alt=""/>
                    <img src={img3} className="w-full" alt="" />
                </div>
            </div>

            <div className="grid grid-cols-12 gap-[50px]">
                <div className="col-span-9 flex justify-between mt-[50px] gap-[50px]">
                    <img className="w-full" src={img4} alt=""/>
                    <img className="w-full" src={img5} alt=""/>
                </div>
            </div>

            {/* Mobile Styles */}
            <style jsx>{`
                @media (max-width: 768px) {
                    .text-[70px] {
                        font-size: 40px; /* Adjust font size for mobile */
                    }
                    .grid {
                        grid-template-columns: 1fr; /* Stack elements in a single column */
                    }
                    .col-span-7, .col-span-5, .col-span-9 {
                        flex-direction: column; /* Stack images vertically */
                        align-items: center; /* Center images */
                    }
                    .gap-[50px] {
                        gap: 20px; /* Adjust gaps for mobile */
                    }
                    .w-10/12 {
                        width: 100%; /* Make images full-width on mobile */
                    }
                    .text-[24px] {
                        font-size: 18px; /* Adjust font size for mobile */
                    }
                }
            `}</style>
        </section>
    );
};

export default Journey;
