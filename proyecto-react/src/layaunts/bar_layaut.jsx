import React from 'react';
import Horizontal from '../components/horizontalBar';
import Footer from '../components/footer';

const BarLayaut = ({children}) =>{
    return(
        <div className='h-screen flex flex-col justify-between'>
            <Horizontal/>
            <div className='h-full'>
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default BarLayaut