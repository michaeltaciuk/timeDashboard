import React, { Fragment, useState } from 'react';
import "./ElapsedTimeBar.css";
import useWindowDimensions from '../hooks/useWindowDimentions.js';

// export default function ElapsedTimeBar({ props }) {
    
    

//     //const [state, setState] = useState(props);

//     let {height, width} = useWindowDimensions();
//     height = height/10;

//     var timeChunks = props?.timeChunks || [];

    
    
//     return (
//         <Fragment>
//             <div className="timeBarContainer">
//                 <div className="timeBar" style={{width: `${width}px`, height: `6rem`}}/>
//                 {timeChunks & timeChunks.map(function (timeChunk) {<div className="timeBar" style={{ width: `${(width / (timeChunk.seconds))}px`, height: `6rem`, background: `${timeChunk.color}` }} />;})}
//             </div>
//             <br/>
//         </Fragment>

//     );
// }

// {timeChunks & timeChunks.map(timeChunk => {
//     <div className="timeBar" style={{width: `${(width*8000/(timeChunk.seconds))}px`, height: `6rem`, background: `${timeChunk.color}`}}/>
// })}


const ElapsedTimeBar = (props) => {
    
    let {height, width} = useWindowDimensions();
    height = height/10;

    var timeChunks = props?.timeChunks || [];
    
    return (
        <Fragment>
            <div className="timeBarContainer">
                <div className="timeBar" style={{width: `${width}px`, height: `6rem`}}/>
                {timeChunks.map( timeChunk => <div className="timeBar" style={{ width: `${(width / (timeChunk.seconds))}px`, height: `6rem`, background: `${timeChunk.color}` }} />)}
            </div>
            <br/>
        </Fragment>
    );
}

export default ElapsedTimeBar;