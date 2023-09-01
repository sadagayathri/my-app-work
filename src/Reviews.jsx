import React from "react";
function Reviews(){
    var [i,setI]=React.useState(0)
    const reviews = [
        {
          id: 1,
          name: 'Pritam Ahire',
          job: 'web developer',
          image:'https://media.licdn.com/dms/image/C5103AQEOJPrf_VFaXA/profile-displayphoto-shrink_800_800/0/1565340799903?e=2147483647&v=beta&t=yvERZWmYhY_7ez_4KmHhpXzoScWGRGLOdvECA2TKixo',
          text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
          update:true
        },
        {
          id: 2,
          name: 'Srinivas',
          job: 'web designer',
          image:'https://media.licdn.com/dms/image/D5603AQHj0zu-uFsoSA/profile-displayphoto-shrink_800_800/0/1666027249363?e=2147483647&v=beta&t=x5te6S7T5VDpjhhhNPWVI1EvAQQR_kTZyCkYHLpihuA',
          text:'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
          update:false
        },
        {
          id: 3,
          name: 'Sangeetha',
          job: 'intern',
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJL4VCOgsX0nJJzSQuRmj1bMjdAouJi51eg&usqp=CAU',
          text:'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
          update:true
        },
        {
          id: 4,
          name: 'bill anderson',
          job: 'the boss',
          image:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
          text:'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
          update:true
        },
      ];
      function nextImg(){
            if(i==reviews.length-1){
                setI(0);
            }
            else{
                setI(i++);
            }
      }
      function prevImg(){
        if(i==0){
            setI(reviews.length-1);
        }
        else{
            setI(i--);
        }
  }
      
      
    return(
        <div className="review">
            <center><h1>Edupoly Reviews</h1></center>
            <div>
                <center>
                
                    <div class="card" style={{width:"40%",height:"auto",marginBottom:"30px"}}>        
                        <center><img src={reviews[i].image} style={{width:"30%",padding:"5px",borderRadius:"50%",height:'50%'}}></img></center>
                        <div class="card-body" style={{width:"auto",padding:"5px"}}>
                            <h2>{reviews[i].name}</h2>
                            <h3 class="text-primary">{reviews[i].job}</h3>
                            <p>{reviews[i].text}</p>
                            <button onClick={()=>{nextImg()}}>Next</button>
                            <button onClick={()=>{nextImg()}}>Suprise me</button>
                            <button onClick={()=>{prevImg()}}>Prev</button>
                        </div>
                            
                    </div>            
                </center>
            </div>

        </div>
    )
}
export default Reviews;