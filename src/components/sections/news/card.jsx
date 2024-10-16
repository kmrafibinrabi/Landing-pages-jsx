import React from 'react';
import {Link} from "react-router-dom";
// Import the Font Awesome component and the specific icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Card = ({ news }) => {
    return (
        <div className="text-white text-[20px]">
            <img src={news.image} alt={news.title} className="w-full" />

            <p className="py-[30px]">{news.title}</p>


            <div className="flex justify-between py-[30px]">
                <p>{news.date}</p>

                <Link to="">
                    View Details
                    <span className={`inline-flex items-center justify-center w-5 h-5 text-[8px] ml-2 border rounded-full`}>
                    <FontAwesomeIcon icon={faArrowRight}/>
                  </span>
                </Link>
            </div>


        </div>
    );
};

export default Card;
