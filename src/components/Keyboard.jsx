import React from 'react'

function Keyboard({value, setValue}) {
    const buttons_left = ['AC','AC','AC','1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    const button_right = ['/','X', '-', '+', '=']

    function handleClick({target}){
        setValue(target.innerText);
    }

  return (
    <div className='w-full h-[65%] flex gap-1 p-2'>

        <div className='grid grid-cols-3 gap-1 flex-1 items-center'>
            {
                buttons_left.map(button => (
                    <div onClick={handleClick} className='grid place-items-center w-full h-full bg-white/65 rounded-full font-semibold cursor-pointer'>{button}</div>
                ))
            }
        </div>

        <div className='h-full w-[23%] grid items-center gap-1'>
            {
                button_right.map(button => (
                    <div onClick={handleClick} className='grid place-items-center w-full h-full  rounded-full font-bold bg-amber-300 cursor-pointer'>{button}</div>
                ))
            }
            
        </div>
       
    </div>
  )
}

export default Keyboard