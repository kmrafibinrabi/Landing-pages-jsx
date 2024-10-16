// src/Testimony.js
import React from 'react';

const Testimony = ({ name, content, designation, img }) => {
    return (
        <div className="flex flex-col md:flex-row justify-start items-start gap-5 md:gap-20 pr-0 md:pr-[180px]"> {/* Stack items on mobile */}
            <img src={img} alt="testimony" className="w-32 h-32 md:w-auto md:h-auto mx-auto" /> {/* Adjust image size for mobile */}
            <div className="testimony">
                <p className="text-[20px] md:text-[35px] text-white leading-[30px] md:leading-[45px]"> {/* Adjust text size for mobile */}
                    {content}
                </p>

                <div className="h-1 w-10 bg-white my-4 md:my-[30px]"></div> {/* Adjust spacing for mobile */}

                <p className="font-bold text-white text-[20px] md:text-[24px]">{name}</p> {/* Adjust name size for mobile */}
                <span className="text-white text-[20px] md:text-[24px]">{designation}</span> {/* Adjust designation size for mobile */}
            </div>
        </div>
    );
};

export default Testimony;
