import React from 'react';

const ItemsImagen = ({img,title,txt1,txt2}) => {
    return(
        <div className='w-5/6 bg-slate-100 border-slate-300 rounded-md'>
            <div className='flex'>
                <img className="rounded-md" src={img} width={70} height={70}/>
                <div className='flex flex-col justify-center'>
                    <span className='tituloItem'>{title}</span>
                    <span className='cuerpoItem'>{txt1}</span>
                    <span className='cuerpoItem'>{txt2}</span>
                </div>
            </div>
        </div> 
    )
}

export default ItemsImagen;

