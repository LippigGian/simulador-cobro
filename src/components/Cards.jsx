import React from 'react';

const Cards = ({ children, className = '' }) => {
    return (
        <div className={`${className ? className : 'flex flex-col items-center bg-[#f5f5f5] rounded-[20px] p-[32px] md:p-[40px] gap-[15px]'}`}>
            {children}
        </div>
    );
};

export default Cards;