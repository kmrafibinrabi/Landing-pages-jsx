import React from 'react';
import Card from "./Card";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


const Evolution = () => {

    const data = [
        {
            id: 1,
            heading: '2024',
            content: 'EWU was ranked 1201-1400 globally'
        },
        {
            id: 2,
            heading: '2021',
            content: 'EWU was ranked first among private universities in Bangladesh.'
        },
        {
            id: 3,
            heading: '2020',
            content: 'EWU was ranked 14th among the 166 universities in Bangladesh.'
        },{
            id: 4,
            heading: '2020',
            content: 'EWU was ranked 14th among the 166 universities in Bangladesh.'
        },
        {
            id: 5,
            heading: '2024',
            content: 'EWU was ranked 1201-1400 globally'
        },
        {
            id: 6,
            heading: '2021',
            content: 'EWU was ranked first among private universities in Bangladesh.'
        },
        {
            id: 7,
            heading: '2020',
            content: 'EWU was ranked 14th among the 166 universities in Bangladesh.'
        }
    ];

    return (
        <section className="wrapper md:!pr-0 ">
            <h2 className="section-heading !font-medium"><span className="text-secondary">Our Ranking</span> <span className="text-primary italic font-black">Evolution</span></h2>

                <Swiper
                    spaceBetween={30}
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
                            slidesPerView: 4, // 3 slides per view on larger devices
                            spaceBetween: 50, // Adjust gap for larger devices
                        },
                    }}
                >
                    {data.map((card, index) => (

                        <SwiperSlide key={card.id}>

                            <Card
                                key={card.id}
                                heading={card.heading}
                                content={card.content}
                                active={index === 0}
                                even={(index + 1) % 2 === 0}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

        </section>
    );
};

export default Evolution;
