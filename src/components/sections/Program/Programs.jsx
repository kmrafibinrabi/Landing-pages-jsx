import React, {useState} from 'react';
import Card from "../Program/Card";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Programs = () => {

    const tabs = [
        {
            id: 'graduate',
            title: 'Graduate'
        },
        {
            id: 'undergraduate',
            title: 'Undergraduate'
        },
        {
            id: 'diploma',
            title: 'Diploma'
        },
    ]

    const data = {
        'graduate': [
            {
                id: 1,
                heading: 'Master of Business Administration (MBA)'
            },
            {
                id: 2,
                heading: 'MSS in Economics'
            },
            {
                id: 3,
                heading: 'Master of Science in Computer Science and Engineering (MS in CSE)',
            },
            {
                id: 4,
                heading: 'Master of Business Administration (MBA)',
            },
            {
                id: 5,
                heading: 'MSS in Economics'
            },
            {
                id: 6,
                heading: 'Master of Science in Computer Science and Engineering (MS in CSE)',
            },
        ],
        'undergraduate': [
            {
                id: 7,
                heading: 'Undergraduate Master of Business Administration (MBA)'
            },
            {
                id: 8,
                heading: 'MSS in Economics'
            },
            {
                id: 9,
                heading: 'Master of Science in Computer Science and Engineering (MS in CSE)',
            },
            {
                id: 10,
                heading: 'Master of Business Administration (MBA)',
            },
            {
                id: 11,
                heading: 'MSS in Economics'
            },
            {
                id: 12,
                heading: 'Master of Science in Computer Science and Engineering (MS in CSE)',
            },
        ],
        'diploma': [
            {
                id: 13,
                heading: 'Diploma Master of Business Administration (MBA)'
            },
            {
                id: 14,
                heading: 'MSS in Economics'
            },
            {
                id: 15,
                heading: 'Master of Science in Computer Science and Engineering (MS in CSE)',
            },
            {
                id: 16,
                heading: 'Master of Business Administration (MBA)',
            },
            {
                id: 17,
                heading: 'MSS in Economics'
            },
            {
                id: 18,
                heading: 'Master of Science in Computer Science and Engineering (MS in CSE)',
            },
        ],
    };


    const [activeTab, setActiveTab] = useState('graduate')


    return (
        <section className="wrapper bg-primary-light md:!pr-0">
            <h2 className="section-heading !font-medium"><span className="text-secondary">Academic</span> <span
                className="text-primary italic font-black">Programs</span></h2>

            {tabs.map((tab, index) => (

<button 
key={tab.id} 
className={`text-[30px] mr-[30px] mb-[15px] sm:mb-[30px] lg:mb-[60px] font-medium ${activeTab === tab.id ? 'text-primary border-b-2 pb-3 border-b-primary' : 'text-secondary'}`} 
onClick={() => { setActiveTab(tab.id) }}
>
{tab.title}
</button>


            ))}

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
                        slidesPerView: 4, // 3 slides per view on larger devices
                        spaceBetween: 50, // Adjust gap for larger devices
                    },
                }}
            >
                {data[activeTab].map((card, index) => (

                    <SwiperSlide key={card.id}>

                        <Card
                            key={`${activeTab}-${card.id}`}
                            heading={card.heading}
                            active={index === 0}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
};

export default Programs;
