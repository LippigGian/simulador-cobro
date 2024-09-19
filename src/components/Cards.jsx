import React from 'react';

const Cards = ({children}) => {
    return (
        <div className='flex flex-col bg-[#f5f5f5] border-2 rounded-[20px] p-8 gap-[15px] m-5'>

           {children}
        </div>
    );
};

export default Cards;