import React,{useState} from "react";
import { NavLink } from "react-router-dom";

export default function Horizontal() {

    let arr = [true, false, false, false, false, false]
    const [style, setStyle] = useState(arr);
    const [dropDown, setDropDown] = useState(true);
    const [text, setText] = useState("");

    const selected = (props) => {
        let newArr = [...arr];
        for (let i = 0; i < newArr.length; i++) {
            newArr[i] = false;
        }
        newArr[props] = true;
        setStyle(newArr);
    }

    const setSelectedText = (txt) => {
        setText(txt);
        setDropDown(true);
    }

    return (
        <div className="xl:container xl:mx-auto w-screen">
            <div className="bg-slate-50 rounded shadow-lg py-3 px-7">
                <nav className="flex justify-between">
                    <div className="flex items-center space-x-3 lg:pr-16 pr-6">
                        <div className="flex items-center px-2 py-4">
                            <img className="rounded-full" src="https://media-exp1.licdn.com/dms/image/C5603AQFZhNAcKbZI8g/profile-displayphoto-shrink_800_800/0/1641708296490?e=1647475200&v=beta&t=cdNCDScUyktW7Nf3kpPz3KjPrHj-ZBEVYqw1cim2Ju4" width={70} height={70}/>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="font-normal text-md leading-6 text-gray-800">Alejandro Ortiz Quiroz</h2>
                            <h2 className="font-normal text-sm leading-6 text-gray-800">Ingeniero Administrador e Ingeniero de Sistemas</h2>    
                        </div>
                        </div>
                    {/* For medium and plus sized devices */}
                    <ul className="hidden md:flex flex-auto space-x-2 items-center">
                        <NavLink 
                            className={({isActive}) => 
                                isActive? 'botonActivo':'botonInactivo'} 
                            to="/">
                            <li>Home</li>
                        </NavLink>
                        <NavLink 
                            className={({isActive}) => 
                                isActive? 'botonActivo':'botonInactivo'} 
                             to="/academic">
                            <li>Información Académica</li>
                        </NavLink>
                        <NavLink 
                            className={({isActive}) => 
                                isActive? 'botonActivo':'botonInactivo'}
                            to='/work'>
                            <li>Información Laboral</li>
                        </NavLink>
                        <NavLink 
                            className={({isActive}) => 
                                isActive? 'botonActivo':'botonInactivo'}
                            to='/hobbies'>
                            <li>Hobbies e Idiomas</li>
                        </NavLink>
                        <NavLink 
                            className={({isActive}) => 
                                isActive? 'botonActivo':'botonInactivo'}
                            to='/certificate'>
                            <li>Certificaciones y Cursos</li>
                        </NavLink> 
                    </ul>
                    <div className=" flex space-x-5 justify-center items-center pl-2">
                        <NavLink className={({isActive}) =>
                            isActive? 'text-blue-800 hover:text-sky-500':'text-gray-600 hover:text-sky-500'} 
                            to="/contactame">
                            <div className="flex flex-col items-center relative cursor-pointer">
                                <i class="far fa-comments fa-2x"></i>
                                <span className="font-normal text-xs">Contáctame</span>
                                <div className="animate-ping w-1.5 h-1.5 bg-blue-800 rounded-full absolute -top-1 -right-1 m-auto duration-200" />
                                <div className=" w-1.5 h-1.5 bg-blue-800 rounded-full absolute -top-1 -right-1 m-auto shadow-lg" />
                            </div>
                        </NavLink>
                    </div>
                </nav>
                {/* for smaller devcies */}
                <div className="block md:hidden w-full mt-5 ">
                    <div onClick={()=>setDropDown(!dropDown)} className="cursor-pointer px-4 py-3 text-white bg-blue-800 rounded flex justify-between items-center w-full">
                        <div className="flex space-x-2">
                            <span id="s1" className={`${text.length != 0 ? '' : 'hidden'} font-semibold text-sm leading-3`}>Selected: </span><p id="textClicked" className="font-normal text-sm leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer ">{text ? text : "Collections"}</p>
                        </div>
                        <svg id="ArrowSVG" className={`${dropDown ? '' : 'rotate-180'} transform duration-100`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className=" relative">
                        <ul id="list" className={`${dropDown ? 'hidden' : 'block'} font-normal text-base leading-4 absolute top-2  w-full rounded shadow-md`}>
                            <li onClick={()=>setSelectedText("Home")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Home</li>
                            <li onClick={()=>setSelectedText("Información Académica")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Información Académica</li>
                            <li onClick={()=>setSelectedText("Información Laboral")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Información Laboral</li>
                            <li onClick={()=>setSelectedText("Hobbies e Idiomas")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Hobbies e Idiomas</li>
                            <li onClick={()=>setSelectedText("Cursos y Certificaciones")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Cursos y Certificaciones</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}
