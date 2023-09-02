import React from "react";
import axios from "axios";
function Cocktail(){
    var[x,setX]=React.useState([])
    React.useEffect(()=>{
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").then((res)=>{
       
            var cocktail=res.data.drinks
            setX([cocktail])
        })
    })
    function search(){
        var d1=document.getElementById('d1')
       
        var z=[...x]
        setX(z.filter((c)=>{
           
            return c.map((g)=>{
                console.log(g)
                return  g.strGlass.startsWith(d1.value)
            })
        })
        )

    }
    return(
        <div>
            <div className="mybox">
                <div className="d-flex flex-wrap" style={{justifyContent:'space-between'}} >
                <h1>The<b style={{color:'green'}}>Cocktail</b>DB</h1>
                <button style={{marginLeft:'800px'}}>Home</button>
                <button >Aboutus</button>
                </div>
            </div>
            <div className="cocktail">
                <center><h3 style={{color:'green'}}>Search your favorite cocktail</h3>
                <input type="text" style={{width:'50%'}} id="d1" onKeyUp={()=>{search()}}></input></center><br></br>
            </div>
            <ul className="d-flex flex-wrap">
            {
                x.map((a)=>{
                    return a.map((b)=>{
                        return <div className="card m-2" style={{width: '12rem'}}>
                            <img className="card-img-top" src={b.strDrinkThumb} alt="card image top" stylr={{width:'50%'}}></img>
                            <div className="card-body">
                                <b>{b.strDrink}</b><br></br>
                                <b>{b.strGlass}</b><br></br>
                                <p>{b.strAlcoholic}</p>
                            <button style={{backgroundColor:'green',color:'white',fontFamily:'verdana'}}>Details</button>
                            </div>
                            </div>
                    })
                })
            }
            </ul>
        </div>
    )
   
}
export default Cocktail;