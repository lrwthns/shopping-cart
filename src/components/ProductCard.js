const ProductCard = (props) => {
  const {name, price, img1, img2} = props;
  return (
    <div className="ProductCard">
      <img src={img1} alt=""/>
      {/* <img src={img2} alt=""/> */}
      <div className="productName">{name}</div>
      <div className="productPrice">{price + ' USD'}</div>
    </div>
  );
}
 
export default ProductCard;