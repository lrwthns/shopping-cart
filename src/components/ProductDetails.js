import { useParams, Link } from "react-router-dom";

const ProductDetails = (props) => {
  const { id } = useParams();
  const { products, changeState } = props;
  return (
    <div className="ProductDetails">
      <img src={products[id].img1} alt={products[id].name} onMouseOver={e => e.currentTarget.src = products[id].img2} onMouseOut={e => e.currentTarget.src = products[id].img1}/>
      <div className="details">
        <div className="product-name">{products[id].name}</div>
        <div className="product-price">{products[id].price + ' USD'}</div>
        <div className="product-desc">{products[id].desc}</div>
        <button className="add-to-cart" onClick={() => changeState(id)}>
        Add to Cart
        </button>
        <Link to='/shopping-cart/shop' className="go-back">{'< Go back'}</Link>
      </div>
    </div>
  );
};
 
export default ProductDetails;