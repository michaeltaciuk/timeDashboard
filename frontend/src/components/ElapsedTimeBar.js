import React, { Fragment, useState } from 'react';
import "./ElapsedTimeBar.css";
import useWindowDimensions from '../hooks/useWindowDimentions.js';
import { Tooltip } from '@mui/material';

const ElapsedTimeBar = (props) => {
    
    let {height, width} = useWindowDimensions();
    height = height/10;

    var timeChunks = props?.timeChunks || [];
    
    return (
        <Fragment>
            <div className="timeScale">
            </div>
            <div className="timeBarContainer">
                <div className="timeBar" style={{width: `${width}px`, height: height}}/>
                {timeChunks.map( timeChunk => 
                    <Tooltip title={`${timeChunk.name}: ${Math.floor(timeChunk.seconds / 60)} min`}>
                        <div className="timeBar" 
                        style={{ 
                            width: `${(width * (timeChunk.seconds / 86400))}px`, 
                            left: `${(width * (timeChunk.started / 86400))}px`,
                            height: height, 
                            background: `${timeChunk.color}` }} 
                        />
                    </Tooltip>
                    )}
            </div>
            
            <br/>
        </Fragment>
    );
}

export default ElapsedTimeBar;