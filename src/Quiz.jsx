import React, { useRef } from 'react';
// import {useNavigate} from 'react-router-dom';

function Quiz() {
     var [n,setN]=React.useState([10])
     var inp=React.useRef()
     var sel=React.useRef()
    //  var navigation=useNavigate();
     console.log( inp.current)
     React.useEffect(function(){
        inp.current.value=10
     },[])
    //  function start(){
    //     if(sel.current.value=="politics"){
    //         <p>Can't Generate Questions, Please Try Different Options</p>
    //     }
    //     else{
    //         navigation("/history")
    //     }
    //  }
    return (
        <center>
                    <div className='mybox1'>
            <h1>Setup Quiz</h1>
            
            <p>Number of questions</p>
            <input type="number"  ref={inp} style={{width:"300px"}}></input>
            <p>Category</p>
            <select style={{width:"300px"}} ref={sel}>
                <option>sports</option>
                <option value="">history</option>
                <option value="">politics</option>
            </select>
            <p>Select Difficulty</p>
            <select style={{width:"300px"}}>
                <option>easy</option>
                <option value="">medium</option>
                <option value="">hard</option>
            </select>
            <br></br>
            <br></br>
            
            <button style={{width:"300px"}}>Start</button>
        </div>
        </center>
    );
}

export default Quiz;