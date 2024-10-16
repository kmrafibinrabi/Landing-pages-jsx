import React, {useRef} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faArrowLeft} from "@fortawesome/free-solid-svg-icons";

import img1 from '../../../assets/img/news/1.png';
import img2 from '../../../assets/img/news/2.png';
import img3 from '../../../assets/img/news/3.png';

import { Navigation } from 'swiper/modules';
import {Swiper, SwiperSlide} from "swiper/react";
import Card from "./card";


const News = () => {

    const newsData = [
        {
            id: 1,
            image: img1,
            title: 'EWU Students Commended for Traffic Management Efforts',
            date: 'Aug 08, 2024',
            link: '#'
        },
        {
            id: 2,
            image: img2,
            title: 'East West University Signs MoU with Asian Institute of Technology to Strengthen...',
            date: 'Sep 05, 2024',
            link: '#'
        },
        {
            id: 3,
            image: img3,
            title: 'To Build a Sustainable and Eco-friendly Campus EWU signed an MoU',
            date: 'Jul 12, 2024',
            link: '#'
        },
        {
            id: 2,
            image: img2,
            title: 'To Build a Sustainable and Eco-friendly Campus EWU signed an MoU',
            date: 'Jul 12, 2024',
            link: '#'
        },
    ]

    const swiperRef = useRef(null);

    return (
        <section className="wrapper bg-primary">
            <div className="text-white flex justify-between items-center mb-[90px]">
                <h2 className="section-heading !mb-0 !font-medium text-white">
                    Recent <span className="italic font-black">News</span>
                </h2>
                <div>
                    <span onClick={() => swiperRef.current.swiper.slidePrev()}
                        className={`inline-flex items-center justify-center w-8 h-8 text-[8px] ml-2 border border-white rounded-full cursor-pointer bg-white text-secondary`}>
                        <FontAwesomeIcon icon={faArrowLeft} size="2x" />
                    </span>

                    <span onClick={() => swiperRef.current.swiper.slideNext()}
                        className={`inline-flex items-center justify-center w-8 h-8 text-[8px] ml-5 border border-white rounded-full cursor-pointer bg-white text-secondary`}>
                        <FontAwesomeIcon icon={faArrowRight} size="2x" />
                    </span>
                </div>
            </div>

            <div className="content">
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation]}
                    spaceBetween={50}
                    loop={true}
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
                    {newsData.map((news, index) => (
                        <SwiperSlide key={news.id}>
                            <Card
                                key={news.id}
                                news={news}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default News;
