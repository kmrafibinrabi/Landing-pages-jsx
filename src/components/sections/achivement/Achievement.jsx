import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {Swiper, SwiperSlide} from "swiper/react";
import Card from "./Card";
import img1 from '../../../assets/img/achivements/1.png'
import img2 from '../../../assets/img/achivements/2.png'
import img3 from '../../../assets/img/achivements/3.png'

const Achievement = () => {


    const achivements = [
        {
            id: 1,
            title: 'EWU Photography Club Secured Double Second Runner-Up at National Photography Exhibition "SFURON 5.0," organized by the Bangladesh University of Professionals (BUP) campus.',
            image: img1,
        },
        {
            id: 2,
            title: 'Dr. Dilara Begum participated in the 2024 forum on Future of World Academic Libraries (WAL) as Invited Speaker',
            image: img2,
        },
        {
            id: 3,
            title: 'A Student from the Department of English won Best Campus Ambassador Award',
            image: img3,
        },
        {
            id: 4,
            title: 'Dr. Dilara Begum participated in the 2024 forum on Future of World Academic Libraries (WAL) as Invited Speaker',
            image: img2,
        },
        {
            id: 5,
            title: 'A Student from the Department of English won Best Campus Ambassador Award',
            image: img3,
        },
    ]

    return (
        <section className="text-white  bg-accent">
            <div className="flex justify-between items-center px-4  mb-[40px] md:mb-[90px] md:px-[130px] pt-[40px] md:pt-[130px]">
                <h2 className="section-heading !mb-0 !font-medium"><span>EWU</span> <span
                    className="italic font-black">Achievements</span></h2>

                <Link to="" className="text-[20px] flex justify-center items-center">
                    <span>View All</span>
                    <span
                        className={`inline-flex items-center justify-center w-5 h-5 text-[8px] ml-2 border border-white rounded-full`}>
                      <FontAwesomeIcon icon={faArrowRight}/>
                    </span>
                </Link>
            </div>


            <Swiper
                spaceBetween={50}
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 1, // 1 slide per view on small devices
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 1, // 2 slides per view on medium devices
                        spaceBetween: 30, // Adjust gap for larger devices
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 3, // 3 slides per view on larger devices
                        spaceBetween: 50, // Adjust gap for larger devices
                    },
                }}
            >
                {achivements.map((achivement, index) => (

                    <SwiperSlide key={achivement.id}>

                        <Card
                            key={achivement.id}
                            achivement={achivement}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
};

export default Achievement;
