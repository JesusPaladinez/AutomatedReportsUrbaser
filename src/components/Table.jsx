import React from 'react'


const archivosRecientes = [
  { nombre: "Informe de Predio 2411", fecha: "30 de noviembre" },
  { nombre: "Informe de Predio 2410", fecha: "31 de octubre" },
  { nombre: "Informe de Predio 2409", fecha: "30 de septiembre" },
  { nombre: "Informe de Predio 2408", fecha: "31 de agosto" },
  { nombre: "Informe de Predio 2407", fecha: "31 de julio" },
  { nombre: "Informe de Predio 2406", fecha: "30 de junio" },
  { nombre: "Informe de Predio 2405", fecha: "31 de mayo" },
  { nombre: "Informe de Predio 2404", fecha: "30 de abril" },
  { nombre: "Informe de Predio 2403", fecha: "31 de marzo" },
  { nombre: "Informe de Predio 2402", fecha: "28 de febrero" },
  { nombre: "Informe de Predio 2401", fecha: "31 de enero" },
];


export default function Table() {
  return (
    <table className='w-full border-separate border-spacing-y-2'>
      <thead>
        <tr>
          <th className='px-6 py-4 text-left text-gray-400 font-normal'>Nombre</th>
          <th className='px-6 py-4 text-left text-gray-400 font-normal'>Última modificación</th>
        </tr>
      </thead>
      <tbody>
        {archivosRecientes.map((item, index) => (
          <tr key={index} className='bg-white transform transition-transform ease-in-out hover:shadow-md'>
            <td className='px-6 py-4 border-l border-t border-b border-gray-300 rounded-l-lg'>{item.nombre} </td>
            <td className='px-6 py-4 border-r border-t border-b border-gray-300 rounded-r-lg text-gray-400'>{item.fecha} </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
