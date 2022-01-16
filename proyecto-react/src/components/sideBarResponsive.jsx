import React from "react";
function SidebarResponsive() {
    return (
        <div className="flex h-screen md:hidden">
            {/* Sidebar starts */}
            {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
            
            <div className="w-12 bg-slate-900 shadow flex-col justify-between ">
                <div className="py-3">
                    <div className="flex items-center px-2 py-4">
                        <img className="rounded-full" src="https://media-exp1.licdn.com/dms/image/C5603AQFZhNAcKbZI8g/profile-displayphoto-shrink_800_800/0/1641708296490?e=1647475200&v=beta&t=cdNCDScUyktW7Nf3kpPz3KjPrHj-ZBEVYqw1cim2Ju4" width={90} height={90}/>
                    </div>
                    <div className="flex flex-col items-center text-gray-300 font-bold">
                    </div>
                    <ul className="mt-12">
                        <div /*Se recorto parte de cod 1*/ ></div>
                        <li className="flex w-full justify-between text-gray-300 hover:text-white hover:bg-sky-600 cursor-pointer items-center px-3 py-3">
                            <div className="flex items-center">
                                <i class="fas fa-graduation-cap"></i>
                            </div>
                        </li>
                        <li className="flex w-full justify-between text-gray-300 hover:text-white hover:bg-sky-600 cursor-pointer items-center px-3 py-3">
                            <div className="flex items-center">
                                <i class="fas fa-briefcase"></i>
                            </div>
                        </li>
                        <li className="flex w-full justify-between text-gray-300 hover:text-white hover:bg-sky-600 cursor-pointer items-center  px-3 py-3">
                            <div className="flex items-center">
                                <i class="fas fa-gamepad"></i>
                            </div>
                        </li>
                        <li className="flex w-full justify-between text-gray-300 hover:text-white hover:bg-sky-600 cursor-pointer items-center px-3 py-3">
                            <div className="flex items-center">
                                <i class="fas fa-clipboard-check"></i>
                            </div>
                        </li>
                    </ul>  
                </div>
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
        <div /*Parte 3*/></div>
        </div>
    );
}

export default SidebarResponsive;