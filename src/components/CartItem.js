const CartItem = (props) => {
  const { products, item, changeState } = props;
  return (
    <div className="CartItem">
    <img src={products[item.index].img1} alt=""/>
    <div className="item-name">{products[item.index].name}</div>
    <div className="item-price">{products[item.index].price + ' USD'}</div>
    <div className="quantity-adjust">
      <button onClick={() => changeState(item.index, true)}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => changeState(item.index)}>+</button>
    </div>
    <button onClick={() => changeState(item.index, false, true)}>Delete</button>
    </div>
  );
}
 
export default CartItem;