import React from 'react'

function Display({value}) {
  return (
    <div className='flex flex-1 items-end justify-end'>
        <p className='text-end text-white font-bold text-4xl'>{value}</p>
    </div>
  )
}

export default Display