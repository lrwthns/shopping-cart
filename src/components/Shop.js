import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const Shop = (props) => {
  const { products } = props;
  return (
    <div className="Shop">
      {products.map((product, index) => {
        const {name, price, img1, img2} = product;
        return (
          <Link to={`/shop/${index}`} key={index}>
            <ProductCard 
            name={name} 
            price={price} 
            img1={img1} 
            img2={img2} 
            key={index}
            />
          </Link>
        );
      })}
    </div>
  );
};
 
export default Shop;