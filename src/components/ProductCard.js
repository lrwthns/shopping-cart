const ProductCard = (props) => {
  const {name, price, img1, img2} = props;
  return (
    <div className="ProductCard">
      <img src={img1} alt={name} onMouseOver={e => e.currentTarget.src = img2} onMouseOut={e => e.currentTarget.src = img1}/>
      <div className="productName">{name}</div>
      <div className="productPrice">{price + ' USD'}</div>
    </div>
  );
}
 
export default ProductCard;