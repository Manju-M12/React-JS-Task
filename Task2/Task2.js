import React from 'react';
import './Task2.css';
import Img from './image/csk.jpg';
import Img1 from './image/Rcb.jpg';
const Task2=()=>{
    return(
        <>
        <div className="Bg">
            <div className="Container">
            <center>
                <h1>Super Over League</h1>
                <img src={Img}/>
                <img src={Img1}/>
            </center>
            </div>
        </div>
        </>
    )
}
export default Task2;