import React from 'react';
import { Link } from 'react-router-dom';
import logoUrbaserDark from '../assets/logoUrbaserDark.svg';
import { LuLogOut } from 'react-icons/lu';


export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-10 bg-urbaser-1">
      <Link to={"/"}>
        <img src={logoUrbaserDark} alt="Logo Urbaser" className="h-10" /> 
      </Link>
      <p className='text-white text-lg'>Jesús Paladinez</p>
      <Link to={'/iniciar-sesion'}>
        <LuLogOut className='text-white hover:text-urbaser-2 text-xl text'/>
      </Link>
    </nav>
  )
}
