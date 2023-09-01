import React from "react";
import axios from "axios";
function Shopping(){
    var [products,setProducts]=React.useState([])
    var [cart,setCart]=React.useState([])
    React.useEffect(function(){
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            setProducts([...res.data])
            var products=res.data.map((x)=>{
                return {...x,IsProductInCart:false}
        
              });
              setProducts([...products])
              console.log(products)
        })
            
    },[])
  
    function addtocart(p,i,ev){
        var temp=[...products]
        temp[i].IsProductInCart=! temp[i].IsProductInCart
        ev.target.style.display="none"
        p.count=1
        setCart([...cart,p])  
    }
    function add(a){
        a.count++
        setCart([a])
        setCart([...cart])
    }
    function sub(s,i){
        // s.count--
        console.log(i)
        // var temp=[...cart]
        // if(s.count<1){
        //     return s.splice(i,1)
        // }
        // else{
        //     return s.count--
        // }
        s.count<1?(s.splice(i,1)):(s.count--)
        // // s.count<1?(cart.splice(i,1)):(s.count--)
        setCart([s])
        setCart([...cart])
    }
    
    return(
      <div className="d-flex flex-wrap ">
        <div className="w-50">
        <ul className="d-flex flex-wrap ">
            {
                products.length>0 && products.map((product,i)=>{
                    return <div className="card m-2" style={{width: "12rem"}}>
                          <img src={product.image} class="card-img-top" alt="..." style={{height: "200px"}}/>
                        <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description.slice(0,10)}</p>
                      <p>{product.price}</p>
                      <button onClick={()=>{add(product)}} style={{display:"none"}}>+</button>
                      <button onClick={(event)=>{addtocart(product,i,event)}} id="btn">Add to cart</button>
                      <button onClick={()=>{sub(product)}} style={{display:"none"}}>-</button>
                        </div>
                       </div>
                })
            }
        </ul>
        </div>
        <div className="w-50">
           <ul>
            {
                cart.length>0 && cart.map((c,i)=>{  
                    return <div className="d-flex flex-wrap ">
                          <div className="card" style={{width: "40rem"}}>
                           <img src={c.image} class="card-img-top" alt="..." style={{width:"70px",height:"70px"}}/>
                           {/* <b className="card-title">{c.title}</b>
                           <button onClick={()=>{add(c)}}>+</button>
                           <button onClick={()=>{sub(c)}}>-</button>
                           <p className="card-text"></p>{c.price} */}
                           <div className="card-body">
                          <b className="card-title">{c.title}:{c.count}</b>
                          <button onClick={()=>{add(c)}}>+</button>
                         <button onClick={()=>{sub(c,i)}}>-</button>
                        <p className="card-text"></p><b>Rs:</b>{c.price}
                        </div>
                           </div>
                          
                          </div>
                    
                  
                    // return <li>
                    //     {c.title}:{c.count}
                    //     <button onClick={()=>{add(c)}}>+</button>
                    //     <button onClick={()=>{sub(c)}}>-</button>
                    // </li>
                })
            }
           </ul>
        </div>
      </div>  
    )
}
export default Shopping;