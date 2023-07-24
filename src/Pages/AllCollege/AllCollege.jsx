import UseCart from "../../hooks/UseCart";
import SingleCollege from "./SingleCollege";


const AllCollege = () => {
    const [carts] = UseCart()
    console.log(carts)
    return (
        <div>
            <h2 className="text-4xl font-bold my-8 text-center">Our College</h2>
        <div className="grid md:grid-cols-3 gap-4 my-24">
           {
            carts.map(cart=><SingleCollege key={cart._id} cart={cart}></SingleCollege>)
           } 
        </div>
        </div>
    );
};

export default AllCollege;