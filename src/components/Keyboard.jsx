import React from 'react'

function Keyboard({value, setValue, setIsCalculate, isCalculate, handleClear}) {
    const buttonsNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    
    const buttonsMath = [
        {value:'/', element: '/'},
        {value:'*', element: 'X'},
        {value:'-', element: '-'},
        {value:'+', element: '+'},
        {value:'=', element: '='},
    ];

    const methodsMath = ['/', '*', '-', '+'];

    // Ao dar um click, verifica as condições
    function handleClick({target}){
        console.log(target.value, target.innerText)
        if(verifyValue(target.value, target.innerText)) {
            console.log("ok")
            setValue([...value, target.value]);
        }
    };

    // Verificação dos valores
    function verifyValue(valueButton, elementButton) {
        if (isCalculate) handleClear()
        if(methodsMath.includes(valueButton) && value[0] === undefined) {
            return false;

        } else if(methodsMath.includes(value[value.length - 1]) && methodsMath.includes(valueButton))  {
            return false;

        } else if (valueButton === '=' && !methodsMath.includes(value[value.length - 1])) {
            setIsCalculate(true);
            return false;
        } else {
            return true;
        }
    }



  return (
    <div className='w-full h-[65%] flex gap-1'>

        <div className='grid grid-cols-3 gap-1 flex-1 items-center'>
            <div onClick={handleClear} className='grid place-items-center w-full h-full bg-white/65 rounded-full font-semibold cursor-pointer'>AC</div>
            <div className='grid place-items-center w-full h-full bg-white/65 rounded-full font-semibold cursor-not-allowed'>±</div>
            <div className='grid place-items-center w-full h-full bg-white/65 rounded-full font-semibold cursor-not-allowed'>%</div>
            
            {
                buttonsNumbers.map(button => (
                    <button onClick={handleClick} className='grid place-items-center w-full h-full bg-white/65 rounded-full font-semibold cursor-pointer' value={button} key={`button_${button}`}>{button}</button>
                ))
            }
        </div>

        <div className='h-full w-[23%] grid items-center gap-1'>
            {
                buttonsMath.map(({value, element}) => (
                    <button onClick={handleClick} className='grid place-items-center w-full h-full  rounded-full font-bold bg-amber-300 cursor-pointer' key={value}value={value}>{element}</button>
                ))
            }
            {/* <div onClick={handleClick} className='grid place-items-center w-full h-full  rounded-full font-bold bg-amber-300 cursor-pointer'>=</div> */}
            
        </div>
       
    </div>
  )
}

export default Keyboard