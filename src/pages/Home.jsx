import React from 'react';
import Report from '../components/Report';
import imgTable from '../assets/table.jpg';
import Table from '../components/Table';


export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col gap-y-10 h-screen">
      <button className="px-6 py-2 text-white font-medium bg-urbaser-1 hover:text-urbaser-2 rounded-md shadow-md transition-all">
        Nuevo informe
      </button>
      <section className='flex gap-8'>
        <Report nameReport={"Tablas"} imgReport={imgTable}/>
        <Report nameReport={"Gráficos de barras"} />
        <Report nameReport={"Gráficos circulares"} />
      </section>
      <section>
        <h1 className='text-xl font-medium'>Recientes</h1>
        <Table />
      </section>   
    </div>
  )
}
