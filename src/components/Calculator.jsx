import React, { useEffect, useState } from 'react'
import Header from './Header';
import Keyboard from './Keyboard';

function Calculator() {
  return (
    <div className='bg-black/65 h-92 w-60 rounded-xl drop-shadow-2xl flex flex-col justify-between overflow-hidden'>
        <Header/>

        <Keyboard/>
    </div>
  )
};

export default Calculator;