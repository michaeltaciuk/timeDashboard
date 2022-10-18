import React, { Fragment, useState } from 'react';
import "./ElapsedTimeBar.css";
import useWindowDimensions from '../hooks/useWindowDimentions.js';

export default function ElapsedTimeBar(props) {
    
    

    //const [state, setState] = useState(props);

    let {height, width} = useWindowDimensions();
    height = height/10;
    
    return (
        <Fragment className="timeBarContainer">
            <div className="timeBar" style={{width: `${width}px`, height: `6rem`}}/>
            {props.timeChunk.map(timeChunk => {
                return (
                    <div className="timeBar" style={{width: `${(width*8000/(timeChunk.seconds))}px`, height: `6rem`, background: `${timeChunk.color}`}}/>
                );
            })}
            <br/>
        </Fragment>

    );
}