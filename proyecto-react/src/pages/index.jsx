import React from 'react';
import BarLayaut from '../layaunts/bar_layaut';
import SpaceItems from '../layaunts/space_items';
import ItemsIcono from '../components/typeItems2';
import { NavLink } from "react-router-dom";

const Index = ()=>{
    return(
        <BarLayaut>
            <SpaceItems>
                <ItemsIcono icon="fab fa-angellist fa-4x text-sky-500 px-2 py-1" title="Hola..." txt1="Mi nombre es Alejandro Ortiz, tengo 24 años, soy Ingeniero Administrador y estudio Ingeniería de Sistemas"/>
                <ItemsIcono icon="fas fa-grin-hearts fa-4x text-sky-600 py-1" title="Me gusta..." txt1="La tecnología, la economía, la ciencia de datos, medir KPI's, analizar los datos y gestionar proyectos"/>
                <ItemsIcono icon="fas fa-hand-spock fa-4x text-sky-400 px-1 py-1" title="Además..." txt1="Me gusta el cine, leer, escribir, jugar UNO, salir a comer sushi, pasear, la música y ver series"/>
                <ItemsIcono icon="fas fa-tired fa-4x text-sky-800 py-1" title="No me gustan..." txt1="Los ambientes conflictivos, hacer tareas repetitivas, no poder debatir puntos e ideas y tomar decisiones sin datos"/>
            </SpaceItems>
            <div className='flex flex-col items-center py-10'>
                ¿Tienes alguna duda?
            </div>
            <div className='flex flex-col items-center py-10'>
                <NavLink className={({isActive}) => isActive? 'botonActivo':'botonInactivoCuerpo'} to="/contactame">
                    <button type="submit" className='font-semibold'>Contáctame</button>
                </NavLink>
            </div>
        </BarLayaut>
    )
}

export default Index 