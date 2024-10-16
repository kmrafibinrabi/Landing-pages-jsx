// src/AchivementCount.js
import React from 'react';
import phd from "../../../assets/icons/achivements/phd.svg";
import program from "../../../assets/icons/achivements/program.svg";
import award from "../../../assets/icons/achivements/award.svg";
import students from "../../../assets/icons/achivements/students.svg";

const AchivementCount = () => {
    return (
        <section className="wrapper bg-primary text-white py-10">
            <h2 className="section-heading !font-medium">
                Key <span className="font-black italic">Achievements</span>
            </h2>

            <div className="flex flex-col md:flex-row justify-between items-center gap-5 mt-5">
                <div className="flex justify-center items-center flex-col text-center">
                    <img src={students} alt="Student" className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]" />
                    <h3 className="text-[40px] md:text-[60px] font-black">10k+</h3>
                    <p className="text-[18px] md:text-[24px]">Students Enrolled</p>
                </div>
                <div className="flex justify-center items-center flex-col text-center">
                    <img src={phd} alt="PhD" className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]" />
                    <h3 className="text-[40px] md:text-[60px] font-black">105+</h3>
                    <p className="text-[18px] md:text-[24px]">PhD Professors</p>
                </div>
                <div className="flex justify-center items-center flex-col text-center">
                    <img src={program} alt="Program" className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]" />
                    <h3 className="text-[40px] md:text-[60px] font-black">25+</h3>
                    <p className="text-[18px] md:text-[24px]">Programs Offered</p>
                </div>
                <div className="flex justify-center items-center flex-col text-center">
                    <img src={award} alt="Award" className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]" />
                    <h3 className="text-[40px] md:text-[60px] font-black">10+</h3>
                    <p className="text-[18px] md:text-[24px]">National Awards</p>
                </div>
            </div>
        </section>
    );
};

export default AchivementCount;
