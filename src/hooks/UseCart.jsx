import { useEffect } from "react";
import { useState } from "react";


const UseCart = () => {
    const [carts, setCart] =useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('http://localhost:5000/Colleges')
        .then(res=>res.json())
        .then(data=>{
          
            setCart(data);
            setLoading(false)
        })
    },[]) 
    return [carts, loading]
};

export default UseCart;