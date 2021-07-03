import { useParams } from "react-router-dom";

const ProductDetails = (props) => {
  const { id } = useParams();
  const { products } = props;
  return (
    <div className="ProductDetails">
      <img src={products[id].img1} alt={products[id].name}/>
      {/* <img src={products[id].img2} alt=""/> */}
      <div className="details">
        <div className="productName">{products[id].name}</div>
        <div className="productPrice">{products[id].price + ' USD'}</div>
      </div>
    </div>
  );
}
 
export default ProductDetails;