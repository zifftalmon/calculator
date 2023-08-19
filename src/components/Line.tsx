import React from "react";


const Line = (props:any) => {
    return(
        <div className="lineDiv">
            <input type="text" placeholder='0' value={props.number} />
        </div>
    )
}

export default Line