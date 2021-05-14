import React from 'react'

const NumberOrWord = (props) => {
    return (
        <div className="container mt-3">
            {isNaN(props.NW)?
                <h2 className="text-center" style={{color:props.textColor, backgroundColor:props.BGColor}}>The word is {props.NW}</h2> :
                <h2 className="text-center" style={{color:props.textColor, backgroundColor:props.BGColor}}>The number is {props.NW}</h2>
            }
        </div>
    )
}

export default NumberOrWord;
