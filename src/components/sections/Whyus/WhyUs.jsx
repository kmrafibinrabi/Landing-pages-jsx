import React from 'react';
import vc from '../../../assets/img/tesimony.png';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Testimony from "./Testimony";

const WhyUs = () => {

    const testimonialData = [
        {
            id: 1,
            img: vc,
            name: 'Professor Shams Rahman',
            designation: 'Vice Chancellor',
            content: 'EWU is committed to providing quality education and to nurturing creativity for producing successful graduates who will serve our society and the world.'
        },
        {
            id: 2,
            img: vc,
            name: 'Professor Shams Rahman',
            designation: 'Vice Chancellor',
            content: 'EWU is committed to providing quality education and to nurturing creativity for producing successful graduates who will serve our society and the world.'
        },
        {
            id: 3,
            img: vc,
            name: 'Professor Shams Rahman',
            designation: 'Vice Chancellor',
            content: 'EWU is committed to providing quality education and to nurturing creativity for producing successful graduates who will serve our society and the world.'
        },
    ];

    return (
        <section className="bg-primary">
            <div className="wrapper">

                <div className="flex justify-between items-center gap-5 overflow-hidden">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} // Include Autoplay module here
                        autoplay={{
                            delay: 3000, // delay between slides (3 seconds)
                            disableOnInteraction: false, // autoplay continues after user interaction
                        }}
                        pagination={{ clickable: true }}
                        spaceBetween={50}
                        breakpoints={{
                            640: {
                                slidesPerView: 1, // 1 slide per view on small devices
                            },
                            768: {
                                slidesPerView: 1, // Adjust if you need more slides on larger screens
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 1,
                                spaceBetween: 50,
                            },
                        }}
                        loop={true} // Enable continuous loop
                    >
                        {testimonialData.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}> {/* Key should be here */}
                                <Testimony
                                    content={testimonial.content}
                                    name={testimonial.name}
                                    designation={testimonial.designation}
                                    img={testimonial.img}
                                />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>

            </div>
        </section>
    );
};

export default WhyUs;
