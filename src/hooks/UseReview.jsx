import { useEffect, useState } from "react";


const UseReview = () => {
    const [reviews, setReviews] =useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res=>res.json())
        .then(data=>{
          
            setReviews(data);
            setLoading(false)
        })
    },[]) 
    return [reviews, loading]
};

export default UseReview;