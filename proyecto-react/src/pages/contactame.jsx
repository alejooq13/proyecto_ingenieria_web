import React from 'react';
import BarLayaut from '../layaunts/bar_layaut';
import Inputs from '../components/inputs';
import useFormData from '../hooks/useFormData';

const Contactame = () => {
  const { form, updateFormData } = useFormData();

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <BarLayaut>
      <div className='flex flex-col py-10 items-center space-y-2 px-5'>
        <h1 className='font-semibold'>
          ¡Deja aquí tus datos, responderé en la mayor brevedad posible!
        </h1>
        <form
          ref={form}
          onChange={updateFormData}
          onSubmit={submitForm}
          className='flex flex-col items-center w-screen'
        >
          <div className='flex flex-col items-center justify-center space-y-5 w-4/5 lg:space-y-0 lg:grid lg:grid-cols-2 py-10 lg:gap-4 font-semibold'>
            <Inputs
              name='nombre'
              text='Nombre'
              type='text'
              placeholder='Tu nombre...'
            />
            <Inputs
              name='correo'
              text='Correo'
              type='email'
              placeholder='Tu correo electrónico...'
            />
            <Inputs
              name='telefono'
              text='Teléfono'
              type='number'
              placeholder='Tú número de teléfono...'
            />
            <Inputs
              name='postal'
              text='Código Postal'
              type='number'
              placeholder='Tú código postal...'
            />
            <Inputs
              name='asunto'
              text='Asunto'
              type='text'
              placeholder='Asunto...'
            />
            <Inputs
              name='direccion'
              text='Dirección'
              type='text'
              placeholder='Dirección'
            />
          </div>
          <button type='submit' className='botonInactivoCuerpo'>
            Enviar
          </button>
        </form>
      </div>
    </BarLayaut>
  );
};

export default Contactame;
