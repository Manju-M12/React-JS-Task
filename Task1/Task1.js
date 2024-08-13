import React from 'react';
import './Task1.css';
import Img from './image/profile.png';
import Img1 from './image/watch.png';
const Task1=()=>{
    return(
        <>
        <center>
            <div className="container">
            <h1>Congratulations</h1>
            <div className="card">
            <img src={Img} className='profile'/> 
            <h1>Kiran V</h1>
            <p>Vishnu Institute of Computer Education and Technology,<br></br>Bhimavaram</p>
            <img src={Img1}/>
            </div>
            </div>
        </center>
        </>
    )
}
export default Task1;