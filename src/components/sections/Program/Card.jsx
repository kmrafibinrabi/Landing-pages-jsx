import React from 'react';
import {Link} from "react-router-dom";
// Import the Font Awesome component and the specific icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Card = ({ heading, content, active, even }) => {
    return (
        <div
            className={`program-card font-medium p-[40px] flex justify-between flex-col rounded-[24px] h-[400px] max-w-[380px] border-2 border-secondary
                ${active ? 'bg-secondary text-white' : 'bg-transparent text-secondary'}
            `}
        >
            <h1 className="text-[30px] font-bold">{heading}</h1>

            <Link to="">
                Explore More
                <span className={`inline-flex items-center justify-center w-5 h-5 text-[8px] ml-2 border ${active ? 'border-white' : 'border-secondary'} rounded-full`}>
                    <FontAwesomeIcon icon={faArrowRight}/>
                  </span>
            </Link>
        </div>
    );
};

export default Card;
