import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../components/sidebarPerfil';

const Index = ()=>{
    return(
        <div className='h-screen flex'>
            <Sidebar/>
            <span>Hola</span>
        </div>
    )
}

export default Index 