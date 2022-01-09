import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../components/sidebarPerfil';

const Index = ()=>{
    return(
        <div className='h-screen flex'>
            <Sidebar/>
            <div className='flex justify-center py-5'>
            <div className='flex flex-col items-center justify-center bg-slate-200 rounded-lg w-8/12 h-1/5'>
                <span className='py-2'>Sobre mi</span>
                <span className='parrafo w-4/5 text-justify'>
                    Tengo grandes capacidades lógicas, matemáticas y analíticas, las cuales, combinadas a mi conocimiento en economía, finanzas, mercadeo, ciencia de datos y programación, me permiten comprender y modelar procesos técnicos, empresariales y logísticos para ser más asertivo en él análisis de opciones y toma de decisiones
                </span>
            </div>
            </div>
            
        </div>
    )
}

export default Index 