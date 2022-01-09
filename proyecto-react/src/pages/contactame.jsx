import React from 'react';
import {Link} from 'react-router-dom'

const Contactame = ()=> {
    return(
        <div className='flex flex-col items-center'>
            <span>Página de contacto</span>
            <Link to="/">Ir a página de Home</Link>
        </div>
    )
}

export default Contactame