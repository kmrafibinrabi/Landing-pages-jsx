import React, {useState} from 'react';
import Card from "./Card";

const Event = () => {

    const tabs = [
        {
            id: 'current',
            title: 'Current'
        },
        {
            id: 'upcoming',
            title: 'Up Coming'
        },
        {
            id: 'archive',
            title: 'Archive'
        },
    ]

    const data = {
        "current": [
            {
                id: 1,
                title: 'Seminar on Stress Management',
                date: '01 Sep, 2024',
                address: 'Room No. 126, S. M. Nousher Ali Lecture Gallery'
            },

            {
                id: 2,
                title: 'Counseling Session on Stress Management',
                date: '13 Aug, 2024',
                address: 'East West University'
            },

            {
                id: 3,
                title: 'National Robo Fest',
                date: '08 Aug, 2024',
                address: 'East West University'
            },
        ],

        "upcoming": [
            {
                id: 4,
                title: 'Upcoming Seminar on Stress Management',
                date: '01 Sep, 2024',
                address: 'Room No. 126, S. M. Nousher Ali Lecture Gallery'
            },

            {
                id: 5,
                title: 'Counseling Session on Stress Management',
                date: '13 Aug, 2024',
                address: 'East West University'
            },

            {
                id: 6,
                title: 'National Robo Fest',
                date: '08 Aug, 2024',
                address: 'East West University'
            },
        ],

        "archive": [
            {
                id: 7,
                title: 'Archive Seminar on Stress Management',
                date: '01 Sep, 2024',
                address: 'Room No. 126, S. M. Nousher Ali Lecture Gallery'
            },

            {
                id: 8,
                title: 'Counseling Session on Stress Management',
                date: '13 Aug, 2024',
                address: 'East West University'
            },

            {
                id: 9,
                title: 'National Robo Fest',
                date: '08 Aug, 2024',
                address: 'East West University'
            },
        ],
    }

    const [activeTab, setActiveTab] = useState('current')

    return (
        <section className="wrapper">
            <h2 className="section-heading !font-medium"><span className="text-secondary">Recent & Upcoming</span> <span
                className="text-primary italic font-bold">Events</span></h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="tab col-span-1 flex flex-col mr-[60px] justify-start items-start mb-[30px] md:mb-0 md:mr-4">
                    {tabs.map((tab, index) => (
                        <button key={tab.id} className={`text-[26px] md:text-[30px] mr-[30px] mb-[0px] md:mb-[40px] md:[20px] font-black ${activeTab === tab.id ? 'text-primary' : 'text-secondary-light'}`} onClick={() => { setActiveTab(tab.id) }}>{tab.title}</button>
                    ))}
                </div>

                <div className="tab-content col-span-3 w-full">

                    {data[activeTab].map((event, index) => (
                        <Card
                            key={`${activeTab}-${event.id}`}
                            id={event.id}
                            event={event}
                            active={index === 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Event;
