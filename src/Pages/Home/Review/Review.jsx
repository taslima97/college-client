import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import UseReview from "../../../hooks/UseReview";


const Review = () => {
    const [reviews] = UseReview();
// console.log(reviews)
    return (
        <div className="my-24 bg-slate-100 p-12">
            <SectionTitle heading={'review section'}></SectionTitle>
           {
            reviews.map((review, index) =><ul key={review._id}>
                <li className=" text-xl ">{index+1}.{review.review}</li>
            </ul>)
           } 
        </div>
    );
};

export default Review;