import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './NavBar';
import Footer from './Footer';


export default function Layout({ children }) {
    const location = useLocation();
    const noLayoutRoutes = ['/iniciar-sesion', '/crear-cuenta'];
    const shouldShowLayout = !noLayoutRoutes.includes(location.pathname);

  return (
    <div className='flex flex-col h-screen'>
      {shouldShowLayout && <Navbar />}
      <main className='flex-1 flex'>{children}</main>
      {shouldShowLayout && <Footer />}
    </div>
  )
}
