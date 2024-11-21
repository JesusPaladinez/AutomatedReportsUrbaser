import React from 'react'


export default function Report({ nameReport, imgReport }) {
  return (
      <div className='bg-white w-96 h-52 p-5 border border-gray-300 rounded-lg relative'>
        <p className='text-lg font-medium pb-3'>{nameReport}</p>
        <div className='flex justify-center items-center h-full'>
            <img src={imgReport} alt="imgReport" className='absolute bottom-0 right-0 max-w-full max-h-full object-contain'/>
        </div>
    </div>
  )
}
