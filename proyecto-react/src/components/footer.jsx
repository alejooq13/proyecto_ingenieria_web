import React from 'react';
function Footer(){
    return(
        <div className='flex flex-col items-center'>
            <span className='text-xs py-4'>Medellín - Colombia</span>
            <div className="xl:container xl:mx-auto w-screen border-slate-300 flex justify-center bg-slate-50 shadow items-center text-xs h-10 text-blue-800 rounded">
                <a href="https://github.com/alejooq13" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github fa-2x px-6  hover:text-sky-500 cursor-pointer"></i>
                </a>
                <a href="alejandro.ortizq1@udea.edu.co" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-at fa-2x px-6 hover:text-sky-500 cursor-pointer"></i>
                </a>
                <a href="https://wa.me/573177159586" target="_blank" rel="noopener noreferrer"> 
                    <i class="fab fa-whatsapp fa-2x px-6 hover:text-sky-500 cursor-pointer"></i>
                </a>
                <a href="https://www.linkedin.com/in/alejooq13/" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-linkedin fa-2x px-6 hover:text-sky-500 cursor-pointer"></i>
                </a>
            </div>
        </div>
             
    )
}

export default Footer;