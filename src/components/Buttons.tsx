import React from 'react' 
import Line from './Line';
import { useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';


const Buttons = () => {
    // function and state to type numbers and actions
    const [number, setNumber]:any[] = useState([]);
    const [count, setCount] = useState(0);
    let sum:number = 0;
    const actionRegex = /[-+*/()]/;
    const numRegex = /[0-9]/


    
    const getNumber = (e:any) => {
        if(e.target.value !== '=') {
            setNumber((number: any[]) => [...number,e.target.value].join(''))
        }
        else {
            sum = (eval(number))
            setNumber([sum])
            setCount(1)
        }

        if(count === 1 && !e.target.value.match(numRegex)) {
            setNumber([number])
            setCount(0)
            setNumber((number: any[]) => [...number,e.target.value].join(''))            
        } else if (count === 1 && !e.target.value.match(actionRegex)) {
            setNumber([])
            setCount(0)
            setNumber((number: any[]) => [...number,e.target.value].join(''))            
        }
    }
    // const calculate = (e:any) => {
    //     console.log(e);
    //     if(sum !== 0) {

    //     }    
    // }
    

    return (
        <>
            <Line number={number}/>
        <div className='buttonsDiv'>
            <div className='numbersDiv'>
                <button value={1} onClick={getNumber}>1</button>
                <button value={2} onClick={getNumber}>2</button>
                <button value={3} onClick={getNumber}>3</button>
                <button value={4} onClick={getNumber}>4</button>
                <button value={5} onClick={getNumber}>5</button>
                <button value={6} onClick={getNumber}>6</button>
                <button value={7} onClick={getNumber}>7</button>
                <button value={8} onClick={getNumber}>8</button>
                <button value={9} onClick={getNumber}>9</button>
                <button value={0} onClick={getNumber}>0</button>
            </div>
            {/* <div className='seperator'></div> */}
            <div className="actionsDiv">
                <button value='+' onClick={getNumber}>+</button>
                <button value='-' onClick={getNumber}>-</button>
                <button value='/' onClick={getNumber}>/</button>
                <button value='*' onClick={getNumber}>*</button>
                <button value='(' onClick={getNumber}>(</button>
                <button value=')' onClick={getNumber}>)</button>
                <button value='**' onClick={() => setNumber([number**2])}>²</button>
                <button value='=' onClick={getNumber}>=</button>
                <div className='clearBtn'>
                    <button onClick={() => setNumber([])}>Clear</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Buttons