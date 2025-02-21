import React from 'react'

function Display({value, resultCalculate}) {
  return (
    <div className='flex flex-1 flex-col items-end justify-end'>
          <p className=' text-[#b1b1b1] font-thin'>{resultCalculate}</p>
        <p className='text-end text-white font-bold text-4xl'>{value}</p>
    </div>
  )
}

export default Display