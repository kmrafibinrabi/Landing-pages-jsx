import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css'; // Make sure to import Swiper styles

import img1 from '../../assets/img/gallery/1.png';
import img3 from '../../assets/img/gallery/3.png';
import img4 from '../../assets/img/gallery/4.png';
import img5 from '../../assets/img/gallery/5.png';

const Gallery = () => {
    const gallery = [
        {
            img: img1,
            alt: 'study'
        },
        {
            img: img4,
            alt: 'study'
        },
        {
            img: img3,
            alt: 'study'
        },
        {
            img: img4,
            alt: 'study'
        },
        {
            img: img1,
            alt: 'study'
        },
        {
            img: img4,
            alt: 'study'
        },
        {
            img: img3,
            alt: 'study'
        },
        {
            img: img4,
            alt: 'study'
        },
        {
            img: img5,
            alt: 'study'
        },
    ];

    return (
        <section className="py-[130px]">
            <Swiper
                spaceBetween={0}
                loop={true}
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 1, // 1 slide per view on small devices
                    
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 1, // 1 slide per view on medium devices
                        spaceBetween: 30, // Adjust gap for larger devices
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 6, // 4 slides per view on larger devices
                        spaceBetween: 50, // Adjust gap for larger devices
                    },
                }}
            >
                {gallery.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img className='w-full' src={image.img} alt={image.alt} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Gallery;
