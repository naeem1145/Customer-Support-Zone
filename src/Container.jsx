import React from 'react';
//this is a container component for setting a max-width and centering content
const Container = ({ children }) => {
    return (
        <div className='max-w-[1200px] mx-auto px-3 md:px-10'>
            {children}
        </div>
    );
};

export default Container;