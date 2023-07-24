

import Recarch from "../../Recearch/Recarch";
import Banner from "../Banner/Banner";

import Category from "../Category/Category";
import College from "../College/College";
import Review from "../Review/Review";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <College></College>
            <Category></Category>
            <Recarch></Recarch>
          <Review></Review>
          
            
        </div>
    );
};

export default Home;