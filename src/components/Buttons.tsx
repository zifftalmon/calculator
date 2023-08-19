import React from 'react' 
import Line from './Line';
import { useState } from 'react';


const Buttons:React.FC = () => {
    
const [number, setNumber]:any[] = useState([]);

const getNumber = (e:any) => {
    setNumber(e.target.value)
}

    return (
        <div>
            <Line {...number}/>
            <div className='numbersDiv' onClick={getNumber}>
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
        </div>
    )
}

export default Buttons