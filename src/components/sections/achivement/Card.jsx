import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt, faClock} from "@fortawesome/free-solid-svg-icons";

const Card = ({ achivement }) => {
    return (
        <div className="flex justify-between flex-col">
            <img src={achivement.image} alt={achivement.title} />
            <p className="text-[18px] my-[60px] mx-[40px]">{achivement.title}</p>
        </div>
    );
};

export default Card;
