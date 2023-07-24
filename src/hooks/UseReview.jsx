import { useEffect, useState } from "react";


const UseReview = () => {
    const [reviews, setReviews] =useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('https://college-server-three.vercel.app/review')
        .then(res=>res.json())
        .then(data=>{
          
            setReviews(data);
            setLoading(false)
        })
    },[]) 
    return [reviews, loading]
};

export default UseReview;