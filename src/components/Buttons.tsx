import React from 'react' 
const Buttons:React.FC = () => {
    const numbers:any[] = [];
    for(let i:number = 0; i < 10; i++) {
        numbers.push(<button value={i}>{i}</button>)
    }
    return (
        <div className='numbersDiv'>
            {numbers}
        </div>
    )
}

export default Buttons