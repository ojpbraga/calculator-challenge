import React, { useEffect, useState } from 'react'
import Header from './Header';
import Keyboard from './Keyboard';
import Display from './Display';

function Calculator() {
    const [value, setValue] = useState([]);
    const [isCalculate, setIsCalculate] = useState(false);

    function handleClear() {
        setValue([]);
    }
    
    useEffect(() => {
        if(isCalculate){
            // Utiliza o JS para realizar a conta
            let result = eval(value.join(''));
            // Permite que seja possível realizar calculos com o resultado
            result = result.toString();
            setValue([result]);
            setIsCalculate(false);
        };
    }, [isCalculate]);

    useEffect(() => {
        console.log(value)
    }, [value])

  return (
    <div className='bg-black/65 h-92 w-60 rounded-xl drop-shadow-2xl flex flex-col justify-between overflow-hidden p-2'>
        <Header/>
        <Display value={value}/>
        <Keyboard value={value} setValue={setValue} setIsCalculate={setIsCalculate} isCalculate={isCalculate} handleClear={handleClear}/>
    </div>
  )
};

export default Calculator;