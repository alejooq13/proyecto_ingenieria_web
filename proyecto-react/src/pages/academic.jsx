import React from 'react';
import ItemsImagen from '../components/typeItems1';
import ItemsIcono from '../components/typeItems2';
import BarLayaut from '../layaunts/bar_layaut';
import SpaceItems from '../layaunts/space_items';

const Academic = () => {
  return (
    <BarLayaut>
      <SpaceItems>
        <ItemsImagen
          img='https://media-exp1.licdn.com/dms/image/C4E0BAQErQBryGJD1LA/company-logo_200_200/0/1629406525017?e=1651708800&v=beta&t=4AAJkAnofls_4eM2CabslyUYAoIF1B2NggO6LovlKR8'
          title='Universidad Nacional de Colombia'
          txt1='Ingeniero Administrador'
          txt2='Abril 2021'
        />
        <ItemsImagen
          img='https://media-exp1.licdn.com/dms/image/C4E0BAQGmEJ8bEhW57g/company-logo_200_200/0/1562246214510?e=1651104000&v=beta&t=6H08XVgW1YDbE0LuFEOLsZl1MQWjFywbN-KSkAjoBW0'
          title='Universidad de Antioquia'
          txt1='Ingeniero de Sistemas'
          txt2='En curso'
        />
        <ItemsImagen
          img='https://media-exp1.licdn.com/dms/image/C4D0BAQEUY8k2cwMFyA/company-logo_200_200/0/1584108034385?e=1651708800&v=beta&t=jahsZ2Wj-47GuYq9jaWgA7lzDOsaQL0lmZwQ-W6XYp0'
          title='Prexia'
          txt1='Semillero de Invetigación'
          txt2='Ene 2020 - Abr 2021'
        />
        <ItemsImagen
          img='https://media-exp1.licdn.com/dms/image/C4E03AQFxDEV6NZS1jw/profile-displayphoto-shrink_400_400/0/1601662427117?e=1648684800&v=beta&t=pSXTu_OHmgaT8FI8YQM8b51qXcakQgoU3KdetFpcTBo'
          title='Expoingeniería Sostenibilidad y Desarrollo'
          txt1='Asistente'
          txt2='Octubre 2018'
        />
        <ItemsIcono
          icon='fas fa-shield-alt fa-4x text-yellow-600'
          title='SAFE'
          txt1='Semillero de Seguridad de la Información'
          txt2='Ene 2018 - Jun 2018'
        />
        <ItemsIcono
          icon='fas fa-donate fa-4x text-yellow-700'
          title='Congreso Internacional de Administración Financiera'
          txt1='Asistente'
          txt2='Diciembre 2017'
        />
        <ItemsIcono
          icon='fas fa-globe-europe fa-4x text-green-600'
          title='Idiomas'
          txt1='Inglés'
          txt2='B1 - Intermedio'
        />
      </SpaceItems>
    </BarLayaut>
  );
};

export default Academic;
