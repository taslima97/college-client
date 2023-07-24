import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import UseCart from "../../../hooks/UseCart";
import Cart from "./Cart";


const College = () => {
  const [carts] = UseCart()
  const sliceCart = carts.slice(0, 3);
  return (
    <div>
      <SectionTitle subHeading={'10am to 4pm'} heading={'College Cart'}></SectionTitle>
      <div className="grid md:grid-cols-3">
        {
          sliceCart.map(cart => <Cart key={cart._id} cart={cart}></Cart>)
        }
      </div>
    </div>
  );
};

export default College;