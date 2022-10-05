import React, { useState } from 'react';
import "./ElapsedTimeBar.css";
import useWindowDimensions from '../hooks/useWindowDimentions.js';

export default function ElapsedTimeBar(props) {
    
    const [state, setState] = useState(props);

    let {height, width} = useWindowDimensions();
    height = height/10;
    
    return (
        <>
            <div className="container" style={{width: `${width}px`, height: `${height}px`}}/>
            {state.map((n, i) => {
                return (
                    <div className="container" style={{width: `${width/(n.time/86400)}px`, height: `${height}px`}}/>
                );
            })}
        </>
        

    );
}