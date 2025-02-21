import React from 'react'

function Keyboard({value, setValue, setIsCalculate, isCalculate, handleClear}) {
    const buttonsNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    
    // Necessitou ser um objeto, pois o elemento referente a X e o value são diferente para a realização do calculo
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
        if(verifyValue(target.value)) {
            console.log("ok")
            setValue([...value, target.value]);
        }
    };

    // Verificação dos valores
    function verifyValue(valueButton) {
        // Não permite adicionar um simbulo matematico se não tiver um número antes
        if(methodsMath.includes(valueButton) && value[0] === undefined) {
            return false;

        // Não permite adicionar mais um simbulo matematico se o ultimo indice da array também for um simbulo matematico
        } else if((methodsMath.includes(value[value.length - 1]) && methodsMath.includes(valueButton)) || (valueButton === '=' && methodsMath.includes(value[value.length - 1])))  {
            return false;

        // Caso o último valor de entrada seja '=', realiza o cálculo
        } else if (valueButton === '=' && !methodsMath.includes(value[value.length - 1])) {
            setIsCalculate(true);
            return false;

        // Caso todos os items forem ok, adiciona o número/simbulo
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
                buttonsNumbers.map(button => button !== '0' ?
                    <button onClick={handleClick} className='grid place-items-center w-full h-full bg-white/65 rounded-full font-semibold cursor-pointer' value={button} key={`button_${button}`}>{button}</button>
                    :
                    <button onClick={handleClick} className='grid place-items-center w-full h-full bg-white/65 rounded-full font-semibold cursor-pointer col-span-3' value={button} key={`button_${button}`}>{button}</button>
                )
            }
        </div>

        <div className='h-full w-[23%] grid items-center gap-1'>
            {
                buttonsMath.map(({value, element}) => (
                    <button onClick={handleClick} className='grid place-items-center w-full h-full  rounded-full font-bold bg-amber-300 cursor-pointer' key={value}value={value}>{element}</button>
                ))
            }
            
        </div>
       
    </div>
  )
}

export default Keyboard