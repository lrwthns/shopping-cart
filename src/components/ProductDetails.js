import { useParams, Link } from "react-router-dom";

const ProductDetails = (props) => {
  const { id } = useParams();
  const { products, changeState } = props;
  return (
    <div className="ProductDetails">
      <img src={products[id].img1} alt={products[id].name}/>
      {/* <img src={products[id].img2} alt=""/> */}
      <div className="details">
        <div className="product-name">{products[id].name}</div>
        <div className="product-price">{products[id].price + ' USD'}</div>
        <button className="add-to-cart" onClick={() => changeState(id)}>
        Add to Cart
        </button>
        <Link to='/shop' className="go-back">{'< Go back'}</Link>
      </div>
    </div>
  );
}
 
export default ProductDetails;