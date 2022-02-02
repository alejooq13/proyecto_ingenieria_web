import React from 'react';

const Footer = () => {
    return(
        <div className='fixed bottom-0 right-0 left-0 flex flex-col items-center mt-2'>
            <div className="xl:container xl:mx-auto w-screen border-slate-300 flex justify-center bg-slate-200 shadow items-center text-xs h-10 text-blue-800 rounded">
                <a href="https://github.com/alejooq13" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github fa-2x px-6  hover:text-sky-500 cursor-pointer"></i>
                </a>
                <a href="/correo" target="_blank" rel="noopener noreferrer">
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