

import { Link } from "react-router-dom";



const Cart = ({ cart }) => {
    

    const { _id, image, collegeName, events, researchHistory, sports, admissionDate } = cart;



    return (
        <div>
            <div className="card h-full w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="College" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="text-center card-title">{collegeName}</h2>
                    <p><span className="font-bold">Research history:</span> {researchHistory}</p>
                    <p><span className="font-bold">Events: </span>{events}</p>
                    <p><span className="font-bold">Sports: </span>{sports}</p>
                    <p><span className="font-bold">Admission date: </span>{admissionDate}</p>
                    <div className="card-actions">
                       
                        <Link to={`/details/${_id}`}><button className="btn bg-amber-500">Details</button></Link>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Cart;