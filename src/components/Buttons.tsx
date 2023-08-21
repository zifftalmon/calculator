import React from 'react' 
import Line from './Line';
import { useState } from 'react';


const Buttons = () => {
    // function and state to type numbers and actions
    const [number, setNumber]:any[] = useState([]);
    const [count, setCount] = useState(0)
    let sum:number = 0
    
    const getNumber = (e:any) => {
        if(e.target.value !== '=') {
            setNumber((number: any[]) => [...number,e.target.value].join(''))
        }
        else {
            console.log(count);
            
            sum = (eval(number))
            setNumber([sum])
            setCount(1)
        }
        if(count === 1) {
            console.log(count);
            setNumber([])
            setCount(0)
            setNumber((number: any[]) => [...number,e.target.value].join(''))
        }
        // if(sum > 100 || e.target.value !== Number) {
        //     console.log(count);
        //     setCount(0)
        // }
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
                <button value='*' onClick={getNumber}>(</button>
                <button value='*' onClick={getNumber}>)</button>
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