import { useEffect } from "react";
import { useState } from "react";


const UseCart = () => {
    const [carts, setCart] =useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('https://college-server-three.vercel.app/Colleges')
        .then(res=>res.json())
        .then(data=>{
          
            setCart(data);
            setLoading(false)
        })
    },[]) 
    return [carts, loading]
};

export default UseCart;