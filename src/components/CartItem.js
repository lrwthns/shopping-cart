const CartItem = (props) => {
  const { products, item } = props;
  return (
    <div className="CartItem">
    <img src={products[item.index].img1} alt=""/>
    <div className="item-name">{products[item.index].name}</div>
    <div className="item-price">{products[item.index].price + ' USD'}</div>
    <div className="quantity-adjust">
      <button>-</button>
      <span>{item.quantity}</span>
      <button>+</button>
    </div>
    <button>Delete</button>
    </div>
  );
}
 
export default CartItem;