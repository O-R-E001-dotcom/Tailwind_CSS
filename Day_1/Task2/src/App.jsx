import React from 'react'
import './App.css'

const App = () => {
  return (
    <div className='flex flex-col space-y-4 p-6 w-60 mx-auto mt-10 bg-white shadow-lg rounded-lg font-semibold'>
      <button className='bg-green-400 rounded-full'>Primary</button>
      <button className='bg-white border-4 border-green-400 rounded-full'>Secondary</button>
      <button className='text-red-500 rounded-tr-full border-2 border-dotted'> Danger</button>
      <button className='text-green-500 rounded-br-full border-2 border-dotted'>Success</button>
      <button className='text-lg rounded-full'>Large size</button>
      <button className='text-xs rounded-full'> Small size</button>

    </div>
  )
}

export default App