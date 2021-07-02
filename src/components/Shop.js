import ProductCard from "./ProductCard";

const Shop = (props) => {
  const { products } = props;
  return (
    <div className="Shop">
      {
        products.map(product => {
          const {name, price, img1, img2} = product;
          return (
          <ProductCard name={name} price={price} img1={img1} img2={img2}/>
          )
        })
      }
    </div>
  );
}
 
export default Shop;