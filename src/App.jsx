import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NewReport from './pages/NewReport';


export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Navigate to="/informes" replace />} />
          <Route path='/informes' element={<Home />} />
          <Route path='/nuevo-informe' element={<NewReport />} />
          <Route path='/iniciar-sesion' element={<Login />} />
          <Route path='/crear-cuenta' element={<Register />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
