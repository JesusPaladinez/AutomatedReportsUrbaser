import React from 'react';
import Report from '../components/Report';
import imgTable from '../assets/table.png';
import imgPieChart from '../assets/pieChart.png';
import Table from '../components/Table';
import imgBarChar from '../assets/barChart.png';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate();

  const handleNewReport = () => {
    navigate('/nuevo-informe');
  }

  return (
    <div className="flex flex-col min-h-screen pt-8 pb-10 gap-y-16">
      <section className='w-full flex justify-start px-16 top-6 relative'>
        <button onClick={handleNewReport} className="flex justify-center items-center px-4 py-2 gap-x-2 text-white font-medium bg-urbaser-1 hover:text-urbaser-2 rounded-md shadow-md transition-all">
          <i class="fa-solid fa-plus"></i>
          Nuevo informe
        </button>
      </section>
      <section className='flex justify-start gap-8 px-16'>
        <Report nameReport={"Tablas"} imgReport={imgTable}/>
        <Report nameReport={"Gráfico de barras"} imgReport={imgBarChar} />
        <Report nameReport={"Gráficos circulares"} imgReport={imgPieChart} />
      </section>
      <section className='flex flex-col justify-start w-full px-16 relative'>
        <h1 className='text-xl font-medium mb-4'>Recientes</h1>
        <Table />
      </section>   
    </div>
  )
}
