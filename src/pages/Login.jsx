import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoUrbaserLight from '../assets/logoUrbaserLight.jpg';


export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/informes');
  };

  return (
    <div className='h-screen w-screen bg-cover bg-top bg-img-login'>
      <div className='flex items-center justify-center h-full bg-black/40'>
        <div className='bg-white w-[350px] h-[400px] flex flex-col justify-center items-center rounded-xl shadow-2xl py-10 gap-y-10'>
          <div className='flex flex-col justify-center items-center gap-y-4'>
            <img src={logoUrbaserLight} alt="Logo Urbaser" className='w-20' />
            <p className='text-2xl font-semibold'>Iniciar sesión</p>
          </div>
          <form className='flex flex-col gap-y-2' onSubmit={handleSubmit}>
            <label htmlFor="email" className='text-sm font-medium'>Correo electrónico:</label>
            <input type="email" id='email' placeholder='@urbaser.co' className='w-60 border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300' />
            <label htmlFor="password" className='text-sm font-medium mt-4'>Contraseña:</label>
            <input type="password" id='password' className='w-60 border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300' />
            <div className='flex justify-center mt-6'>
              <button className='bg-urbaser-1 hover:text-urbaser-2 text-white w-24 py-2 px-4 rounded-md font-medium'>Aceptar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
