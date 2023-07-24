import { useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
const Details = () => {
    const info = useLoaderData();
    console.log(info)
    const { image, collegeName, events, admissionProcess, researchHistory, sports, admissionDate, ratings } = info;
    return (
        <div>
            <SectionTitle heading={'Our college details'}></SectionTitle>
        <div className="card h-full md:w-2/3 mx-auto bg-base-100 my-16 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="College" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="text-center card-title">{collegeName}</h2>
                <p><span className="font-bold">Research history:</span> {researchHistory}</p>
                <p><span className="font-bold">Events: </span>{events}</p>
                <p><span className="font-bold">Admission process: </span>{admissionProcess}</p>
                <p><span className="font-bold">Sports: </span>{sports}</p>
                <div className=''><p className="font-bold">Ratings: </p><Rating style={{ maxWidth: 150 }} value={ratings} readOnly /></div>
                <p><span className="font-bold">Admission date: </span>{admissionDate}</p>

            </div>
        </div>
        </div>
    );
};

export default Details;