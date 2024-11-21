import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoUrbaser from '../assets/logoUrbaser.svg';


export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-10 bg-greenUrbaser1">
      <Link to={"/"}>
        <img src={logoUrbaser} alt="Logo Urbaser" className="h-10" /> 
      </Link>
      <div className="flex gap-10 text-white font-medium">
        <Link to="/" className='hover:text-teal-500 transition-all'>Inicio</Link>
        <Link to="/login" className='hover:text-teal-500 transition-all'>Iniciar sesión</Link>
        <Link to="/register" className='hover:text-teal-500 transition-all'>Crear cuenta</Link>
      </div>
    </div>
  )
}
