import React from 'react';
import BarLayaut from '../layaunts/bar_layaut';
import SpaceItems from '../layaunts/space_items';
import ItemsIcono from '../components/typeItems2';

const Hobbies = ()=>{
    return(
        <BarLayaut>
            <SpaceItems>
                <ItemsIcono icon="fas fa-table-tennis fa-4x text-gray-700 py-1" title="Deporte favorito" txt1="Tenis de Campo"/>
                <ItemsIcono icon="fas fa-book fa-4x text-gray-700 py-1" title="Último libro leído" txt1="El retrato de Dorian Gray"/>
                <ItemsIcono icon="fas fa-video fa-4x text-gray-700 py-1" title="Última serie vista" txt1="House of Cards"/>
                <ItemsIcono icon="fas fa-puzzle-piece fa-4x text-gray-700 py-1" title="Videojuego preferido" txt1="God of War"/>
                <ItemsIcono icon="fas fa-mask fa-4x text-gray-700 py-1" title="Superhéroe favorito" txt1="Batman"/>
            </SpaceItems>
        </BarLayaut>
    )
}

export default Hobbies