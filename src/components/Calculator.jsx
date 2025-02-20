import React, { useEffect, useState } from 'react'
import Header from './Header';
import Keyboard from './Keyboard';
import Display from './Display';

function Calculator() {
    const [value, setValue] = useState();
    
    useEffect(() => {
        console.log(value)
    }, [value]);

  return (
    <div className='bg-black/65 h-92 w-60 rounded-xl drop-shadow-2xl flex flex-col justify-between overflow-hidden p-2'>
        <Header/>
        <Display value={value}/>
        <Keyboard value={value} setValue={setValue}/>
    </div>
  )
};

export default Calculator;