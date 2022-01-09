import React from "react";
function Sidebar() {
    return (
        <div className="flex flex-no-wrap h-screen">
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
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                    <circle cx={12} cy={12} r={9} />
                                </svg>
                                <span className="text-sm  ml-2">Performance</span>
                            </div>
                        </li>
                        <li className="flex w-full justify-between text-gray-300 hover:text-white hover:bg-sky-600 cursor-pointer items-center px-8 py-3">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="7 8 3 12 7 16" />
                                    <polyline points="17 8 21 12 17 16" />
                                    <line x1={14} y1={4} x2={10} y2={20} />
                                </svg>
                                <span className="text-sm  ml-2">Deliverables</span>
                            </div>
                        </li>
                        <li className="flex w-full justify-between text-gray-300 hover:text-white hover:bg-sky-600 cursor-pointer items-center  px-8 py-3">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                </svg>
                                <span className="text-sm  ml-2">Invoices</span>
                            </div>
                        </li>
                        <li className="flex w-full justify-between text-gray-300 hover:text-white hover:bg-sky-600 cursor-pointer items-center px-8 py-3">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="12 4 4 8 12 12 20 8 12 4" />
                                    <polyline points="4 12 12 16 20 12" />
                                    <polyline points="4 16 12 20 20 16" />
                                </svg>
                                <span className="text-sm  ml-2">Inventory</span>
                            </div>
                        </li>
                        <li className="flex w-full justify-between text-gray-300 hover:text-white hover:bg-sky-600 cursor-pointer items-center px-8 py-3">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <circle cx={12} cy={12} r={3} />
                                </svg>
                                <span className="text-sm  ml-2">Settings</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="px-8 bg-slate-800 flex items-center justify-center text-xs h-10 text-white">
                    Medellín - Colombia 
                </div>
            </div>
            <div /*Parte 3*/></div>
        </div>
    );
}

export default Sidebar;

          
        