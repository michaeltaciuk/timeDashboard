import React, { useState } from 'react';
import "./ElapsedTimeBar.css";
import useWindowDimensions from '../hooks/useWindowDimentions.js';

export default function ElapsedTimeBar(props) {
    
    

    //const [state, setState] = useState(props);

    let {height, width} = useWindowDimensions();
    height = height/10;
    
    return (
        <>
            <div className="container" style={{width: `${width}px`, height: `${height}px`}}/>
            {props.timeSpent.map(timeChunk => {
                return (
                    <div className="container" style={{width: `${width}px`, height: `${height}px`, color: timeChunk.color}}/>
                );
            })}
        </>
        

    );
}
