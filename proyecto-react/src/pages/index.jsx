import React from 'react';
import Horizontal from '../components/horizontalBar';
import NavBar from '../components/navBar';
import Footer from '../components/footer';

const Index = ()=>{
    return(
        <div className='h-screen flex flex-col justify-between'>
            <Horizontal/>
            <span className='text-center '>
                Home
            </span>
            <Footer className="pb-10"/>
        </div>
    )
}

export default Index 