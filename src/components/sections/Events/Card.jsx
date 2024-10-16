import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";

const Card = ({ event, active }) => {
    return (
        <div
            className={`p-[30px] mb-[30px] rounded-xl ${active ? 'bg-primary text-white' : 'bg-primary-light text-accent'}`}
        >
            <div className="flex flex-col md:flex-row justify-between items-start">
                <h1 className="font-bold text-[35px] mb-[15px] flex-1 md:mr-4">{event.title}</h1>
                <p className="text-[30px] flex items-center gap-2 md:gap-5 text-right">
                    <FontAwesomeIcon icon={faClock} />
                    <span>{event.date}</span>
                </p>
            </div>
            <p className="font-bold text-[18px]">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                {event.address}
            </p>
        </div>
    );
};

export default Card;
