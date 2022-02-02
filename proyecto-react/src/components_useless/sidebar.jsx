import React from "react";
function SidebarP() {
    return (
        <div className="hidden md:flex flex-no-wrap h-screen">
            {/* Sidebar starts */}
            {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
            <div className="w-64 absolute sm:relative bg-slate-900 shadow lg:h-full flex-col justify-between hidden sm:flex">
                <div className="py-3">
                    <div className="flex items-center px-8 py-4">
                        <img className="rounded-full" src="https://media-exp1.licdn.com/dms/image/C5603AQFZhNAcKbZI8g/profile-displayphoto-shrink_800_800/0/1641708296490?e=1647475200&v=beta&t=cdNCDScUyktW7Nf3kpPz3KjPrHj-ZBEVYqw1cim2Ju4" width={200} height={200}/>
                    </div>
                    <div className="flex flex-col items-center text-gray-300 font-bold">
                        <span>Alejandro Ortiz Quiroz</span>
                        <span>Ingeniero Administrador e</span>
                        <span>Ingeniero de Sistemas</span>
                    </div>
                    <ul className="mt-12">
                        <div /*Se recorto parte de cod 1*/ ></div>
                        <li className="flex w-full justify-between text-gray-300 hover:text-white hover:bg-sky-600 cursor-pointer items-center px-8 py-3">
                            <div className="flex items-center">
                                <i class="fas fa-graduation-cap"></i>
                                <span className="text-sm  ml-2">Información Académica</span>
                            </div>
                        </li>
                        <li className="flex w-full justify-between text-gray-300 hover:text-white hover:bg-sky-600 cursor-pointer items-center px-8 py-3">
                            <div className="flex items-center">
                                <i class="fas fa-briefcase"></i>
                                <span className="text-sm  ml-2">Información Laboral</span>
                            </div>
                        </li>
                        <li className="flex w-full justify-between text-gray-300 hover:text-white hover:bg-sky-600 cursor-pointer items-center  px-8 py-3">
                            <div className="flex items-center">
                                <i class="fas fa-gamepad"></i>
                                <span className="text-sm  ml-2">Hobbies e Idiomas</span>
                            </div>
                        </li>
                        <li className="flex w-full justify-between text-gray-300 hover:text-white hover:bg-sky-600 cursor-pointer items-center px-8 py-3">
                            <div className="flex items-center">
                                <i class="fas fa-clipboard-check"></i>
                                <span className="text-sm  ml-2">Cursos y Certificaciones</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className=" bg-slate-800 flex justify-center items-center w-screen text-xs h-10 text-white">
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
            <div /*Parte 3*/></div>
        </div>
    );
}

export default SidebarP;
