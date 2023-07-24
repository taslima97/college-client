import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const SingleCollege = ({cart}) => {

    const { image, collegeName, events, researchHistory, sports, admissionDate, ratings, admissionProcess } = cart;

    return (
        <div>
            <div className="card h-full w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="College" className="rounded-xl h-60" />
                </figure>
                <div className="card-body">
                    <h2 className="text-center card-title">{collegeName}</h2>
                    <p><span className="font-bold">Research history:</span> {researchHistory}</p>
                    <p><span className="font-bold">Events: </span>{events}</p>
                    <p><span className="font-bold">Admission process: </span>{admissionProcess}</p>
                    <p><span className="font-bold">Sports: </span>{sports}</p>

                    <div className='flex'><p className="font-bold">Ratings: </p><Rating style={{ maxWidth: 150 }} value={ratings} readOnly /></div>

                    <p><span className="font-bold">Admission date: </span>{admissionDate}</p>
                    <div className="card-actions">
                       
                    </div>
                </div>
            </div>

        </div> 
    )
};

export default SingleCollege;