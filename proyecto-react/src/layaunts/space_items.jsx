import React from 'react';

const SpaceItems = ({children}) =>{
    return(
        <div className='flex flex-col items-center justify-center space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 py-10 lg:px-20 px-5 lg:gap-4'>
            {children}
        </div>       
    )
}

export default SpaceItems;