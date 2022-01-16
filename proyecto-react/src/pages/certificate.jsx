import React from 'react';
import Horizontal from '../components/horizontalBar';
import Footer from '../components/footer';

const Certificate = ()=>{
    return(
        <div className='h-screen flex flex-col justify-between'>
            <Horizontal/>
            <span className='text-center '>
                Cursos y Certificados
            </span>
            <Footer className="pb-10"/>
        </div>
    )
}

export default Certificate