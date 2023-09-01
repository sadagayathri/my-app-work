import React from "react";
import axios from 'axios';

function Project(){
    var [tour,setTour]=React.useState([])
    React.useEffect(()=>{
        axios.get("https://course-api.com/react-tours-project")
        .then((res)=>{
            
          var tour = res.data.map((y)=>{
                return {...y,flag:false}
            })
            // console.log(res.data)
             setTour([...tour])
        })
    },[])
    function notintrested(i){
        var temp=[...tour]
        temp.splice(i,1)
        setTour([...temp])
    }
    function readmore(ind){
       var temp=([...tour])
       temp[ind].flag =! temp[ind].flag
       setTour([...temp])
    }
    return(
        <div>
        <center>
            <h1>Our Tours</h1>
            </center>
            {
        tour.map((place,i)=>{
            return <div>
            <center>
            <div class="card" style={{width:"40%",height:"auto",marginBottom:"30px"}}>
             <img src={place.image} style={{width:"auto",padding:"5px"}} alt="" />
             <div class="card-body" style={{width:"auto",padding:"5px"}}>
                 <span><p class="text-start" style={{fontSize:"20px"}}><b>{place.name}</b></p><p class="text-end"><span class="badge bg-secondary">{place.price}</span></p></span>
                 <p>{place.flag?place.info:place.info.slice(0,200)}
                 <button onClick={()=>{readmore(i)}}>{place.flag?"...Show Less":"...Read more"}</button></p>
                 <button onClick={()=>{notintrested(i)}} style={{borderColor:"red",color:"red"}}>Not intrested</button>
             </div>
             </div>
            </center>     
              </div>
        })
    }
        </div>
        
    ) 
    
}
export default Project;