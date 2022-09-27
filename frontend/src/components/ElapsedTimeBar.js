import "./ElapsedTimeBar.css";
import useWindowDimensions from '../hooks/useWindowDimentions.js';

function ElapsedTimeBar(props) {
    
    let {height, width} = useWindowDimensions();
    height = height/10;
    
    return (
        <div className="container" style={{width: `${width}px`, height: `${height}px`}}>
        </div>
    );
}

export default ElapsedTimeBar;