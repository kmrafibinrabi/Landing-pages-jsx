import React from 'react';

const Card = ({ heading, content, active, even }) => {
    return (
        <div
            className={`evolution-card py-[90px] px-[30px] rounded-[24px] flex justify-between h-[400px] items-center flex-col gap-5 max-w-[380px] 
                ${active ? 'bg-primary text-white' : 'bg-primary-light text-secondary'}
                ${even ? 'mt-[60px]' : 'mt-0'}
            `}
        >
            <h1 className="text-card-heading font-bold">{heading}</h1>
            <p className="text-card-content text-center font-bold">{content}</p>
        </div>
    );
};

export default Card;
