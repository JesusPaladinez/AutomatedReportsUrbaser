import React from 'react'


const archivosRecientes = [
  { nombre: "Informe de Predio 2410", fecha: "31 de octubre" },
  { nombre: "Informe de Predio 2409", fecha: "30 de septiembre" },
  { nombre: "Informe de Predio 2408", fecha: "31 de agosto" },
  { nombre: "Informe de Predio 2407", fecha: "31 de julio" },
  { nombre: "Informe de Predio 2406", fecha: "30 de junio" },
  { nombre: "Informe de Predio 2405", fecha: "31 de mayo" },
];


export default function Table() {
  return (
    <table className='w-full'>
      <thead>
        <tr className='flex justify-between px-6 py-4 text-gray-400'>
          <th className='flex-1 text-left font-normal'>Nombre</th>
          <th className='flex-1 text-left font-normal'>Última modificación</th>
        </tr>
      </thead>
      <tbody className='flex flex-col gap-y-2'>
        {archivosRecientes.map((item, index) => (
          <tr
            key={index}
            className='flex justify-between bg-white hover:bg-green-50 p-6 border border-gray-300 rounded-lg'
          >
            <td className='flex-1'>{item.nombre} </td>
            <td className='flex-1 text-gray-400'>{item.fecha} </td>
          </tr>
        ))}         
      </tbody>
    </table>
  )
}
