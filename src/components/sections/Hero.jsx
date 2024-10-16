// src/Hero.js
import React from 'react';
import hero from '../../assets/img/hero.png';

const Hero = () => {
    return (
        <section
            className="relative h-screen bg-cover bg-no-repeat bg-center flex items-center text-center"
            style={{ backgroundImage: `url(${hero})` }}
        >
            <div className="wrapper">
                <div className="text-left text-white w-full sm:w-2/3 flex flex-col self-start gap-y-4 sm:gap-y-8">
                    <h1 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[110px] leading-tight mb-0">
                        Building a <span className="italic font-black">Brighter Future</span> Together
                    </h1>
                    <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]">
                        East West University is dedicated to providing an enriching learning <br></br>environment where students
                        can excel academically and personally.
                    </p>

                    <button className="cta bg-secondary text-white py-2 px-6 mt-4 rounded-md sm:text-[18px] md:text-[20px]">
                        Apply Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
