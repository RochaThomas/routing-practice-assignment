import React from 'react'
import { useParams } from 'react-router-dom'

const DispInput = () => {
    const {varInput, wordColor, bgColor} = useParams();
    return (
        isNaN(varInput) ? 
        (wordColor && bgColor ?
            <div style={{color: wordColor, backgroundColor: bgColor}}>The word is: {varInput}</div>:
            <div>The word is: {varInput}</div>
        ):
            <div>The number is: {varInput}</div>
    )
}

export default DispInput;