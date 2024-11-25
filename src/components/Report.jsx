import React from 'react'


export default function Report({ nameReport, imgReport }) {
  return (
    <div className='bg-white w-96 h-52 p-6 pl-7 border border-gray-300 rounded-lg relative overflow-hidden'>
      <p className='text-lg font-medium pb-3'>{nameReport}</p>
      <div className='rounded-lg'>
        <img src={imgReport} alt="imgReport" className='absolute bottom-0 right-0 top-16 left-5 w-[calc(100%-28px)] h-[calc(100%-28px)] object-contain' />
      </div>
    </div>
  )
}
