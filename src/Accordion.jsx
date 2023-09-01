import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
function Accordion(){
    var [questions,setQuestions] = React.useState([
        {
          id: 1,
          title: 'Do I have to allow the use of cookies?',
          info:
            'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.',
        //   status:false,
        },
        {
          id: 2,
          title: 'How do I change my My Page password?',
          info:
            'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.',
            // status:false,
        },
        {
          id: 3,
          title: 'What is BankID?',
          info:
            'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.',
            // status:false,
        },
        {
          id: 4,
          title: 'Whose birth number can I use?',
          info:
            'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.',
            // status:false,
        },
        {
          id: 5,
          title: 'When do I recieve a password ordered by letter?',
          info:
            'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ',
            // status:false,
        },
      ])
    
     React.useEffect(function(){
        var y=questions.map((x)=>{
            return {...x,status:false}
    
          })
          setQuestions([...y])
     },[])

      function expand(i){
        var temp=([...questions])
        temp[i].status=!temp[i].status
        setQuestions([...temp])
      }
    return(
        <center><div className="mybox" style={{backgroundColor:"purple",width:"600px"}}>
            <h3 style={{color:"white"}}>Questions And Answers About Login</h3>
            
            {
                questions.map((q,i)=>{
                    return <div className="mybox" style={{fontSize:"20px",backgroundColor:"white"}}><b>{q.title}</b>
                    <p>{q.status?q.info:q.info.slice(0,0)}</p>
                    <p class="text-end">
                        <button onClick={()=>{expand(i)}} style={{borderRadius:"50%"}}>
                            {q.status?<AiOutlineMinus /> : <AiOutlinePlus />}
                        </button>
                    </p>
                   
                    </div>
                })
            }
           
        </div>
        </center>
    )
}
export default Accordion;