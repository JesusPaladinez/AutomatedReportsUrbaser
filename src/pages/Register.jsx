import React from 'react'
import { useNavigate } from 'react-router-dom';
import logoUrbaserLight from '../assets/logoUrbaserLight.jpg'


export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/iniciar-sesion');
  }

  return (
    <div className='h-screen w-screen bg-cover bg-bottom bg-img-register'>
      <div className='flex justify-center items-center h-full bg-black/40'>
        <div className='bg-white w-[350px] h-[560px] flex flex-col justify-center items-center rounded-xl shadow-2xl py-10 gap-y-10'>
          <div className='flex flex-col justify-center items-center gap-y-4'>
            <img src={logoUrbaserLight} alt="Logo Urbaser" className='w-20' />
            <p className='text-2xl font-semibold'>Crear cuenta</p>
          </div>
          <form className='flex flex-col gap-y-2' onSubmit={handleSubmit}>
            <label htmlFor="name" className='text-sm font-medium'>Nombre:</label>
            <input type="text" id='name' className='w-60 border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300' />
            <label htmlFor="email" className='text-sm font-medium mt-4'>Correo electrónico:</label>
            <input type="email" id='email' placeholder='@urbaser.co' className='w-60 border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300' />
            <label htmlFor="password" className='text-sm font-medium mt-4'>Contraseña:</label>
            <input type="password" id='password' className='w-60 border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300' />
            <label htmlFor="confirmPassword" className='text-sm font-medium mt-4'>Confirmar contraseña:</label>
            <input type="password" id='confirmPassword' className='w-60 border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300' />
            <div className='flex justify-center mt-6'>
              <button className='bg-urbaser-1 hover:text-urbaser-2 text-white w-24 py-2 px-4 rounded-md font-medium'>Aceptar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
