import React,{useState} from "react";
import { NavLink } from "react-router-dom";

const Horizontal = () => {
    return (
        <div className="xl:container xl:mx-auto w-screen">
            <div className="bg-slate-200 rounded shadow-lg py-3 px-7">
                <nav className="flex justify-between">
                    <div className="flex items-center space-x-3 lg:pr-16 pr-6">
                        <div className="flex items-center px-2 py-4">
                            <img className="rounded-full" src="https://media-exp1.licdn.com/dms/image/C5603AQFZhNAcKbZI8g/profile-displayphoto-shrink_800_800/0/1641708296490?e=1647475200&v=beta&t=cdNCDScUyktW7Nf3kpPz3KjPrHj-ZBEVYqw1cim2Ju4" width={70} height={70}/>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-md leading-6 text-gray-800 font-bold">Alejandro Ortiz Quiroz</h2>
                            <h2 className="font-normal text-sm leading-6 text-gray-800">Ingeniero Administrador e Ingeniero de Sistemas</h2>    
                        </div>
                        </div>
                    {/* For medium and plus sized devices */}
                    <ul className="hidden lg:flex flex-auto space-x-2 items-center">
                        <NavLink 
                            className={({isActive}) => 
                                isActive? 'botonActivo':'botonInactivo'} 
                            to="/">
                            <li>¿Quién soy?</li>
                        </NavLink>
                        <NavLink 
                            className={({isActive}) => 
                                isActive? 'botonActivo':'botonInactivo'} 
                             to="/academic">
                            <li>Mi formación</li>
                        </NavLink>
                        <NavLink 
                            className={({isActive}) => 
                                isActive? 'botonActivo':'botonInactivo'}
                            to='/work'>
                            <li>Mi experiencia</li>
                        </NavLink>
                        <NavLink 
                            className={({isActive}) => 
                                isActive? 'botonActivo':'botonInactivo'}
                            to='/hobbies'>
                            <li>En mi tiempo libre</li>
                        </NavLink>
                        <NavLink 
                            className={({isActive}) => 
                                isActive? 'botonActivo':'botonInactivo'}
                            to='/certificate'>
                            <li>Mis certificaciones</li>
                        </NavLink> 
                    </ul>
                    <div className=" flex space-x-5 justify-center items-center pl-2">
                        <NavLink className={({isActive}) =>
                            isActive? 'text-blue-800 hover:text-sky-500':'text-gray-600 hover:text-sky-500'} 
                            to="/contactame">
                            <div className="flex flex-col items-center relative cursor-pointer">
                                <i class="far fa-comments fa-2x"></i>
                                <span className="text-xs font-semibold">Contáctame</span>
                                <div className="animate-ping w-1.5 h-1.5 bg-blue-800 rounded-full absolute -top-1 -right-1 m-auto duration-200" />
                                <div className=" w-1.5 h-1.5 bg-blue-800 rounded-full absolute -top-1 -right-1 m-auto shadow-lg" />
                            </div>
                        </NavLink>
                    </div>
                </nav>
                {/* for smaller devcies */}
                <div className="block lg:hidden w-full mt-5">
                    <ul className="flex flex-auto justify-center py-4 items-center space-x-10">
                        <NavLink 
                            className={({isActive}) => 
                                isActive? 'text-blue-800 hover:text-sky-500':'text-gray-600 hover:text-sky-500'} 
                            to="/">
                            <i class="fas fa-home fa-2x"></i>
                        </NavLink>
                        <NavLink 
                            className={({isActive}) => 
                                isActive? 'text-blue-800 hover:text-sky-500':'text-gray-600 hover:text-sky-500'} 
                             to="/academic">
                            <i class="fas fa-graduation-cap fa-2x"></i>
                        </NavLink>
                        <NavLink 
                            className={({isActive}) => 
                                isActive? 'text-blue-800 hover:text-sky-500':'text-gray-600 hover:text-sky-500'}
                            to='/work'>
                            <i class="fas fa-briefcase fa-2x"></i>
                        </NavLink>
                        <NavLink 
                            className={({isActive}) => 
                                isActive? 'text-blue-800 hover:text-sky-500':'text-gray-600 hover:text-sky-500'}
                            to='/hobbies'>
                            <i class="fas fa-gamepad fa-2x"></i>
                        </NavLink>
                        <NavLink 
                            className={({isActive}) => 
                            isActive? 'text-blue-800 hover:text-sky-500':'text-gray-600 hover:text-sky-500'}
                            to='/certificate'>
                            <i class="fas fa-check-square fa-2x"></i>
                        </NavLink> 
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Horizontal;