import React from 'react';
import './Task3.css';
function Task3(){
    let button=()=>{
        let like=document.getElementById('like').value;
         
        alert("You have responded");
    }    
    return(
        <>
        <div className="buttons">
            <center>
                <h1>
                    Social Buttons
                </h1>
                <input type="button" className="like" value="Like" onClick={button}/>
                <input type="button" className="comment" value="Comment" onClick={button}/>
                <input type="button" className="share" value="Share" onClick={button}/>
            </center>
        </div>
        </>
    )
}
export default Task3;