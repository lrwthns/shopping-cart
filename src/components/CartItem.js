const CartItem = (props) => {
  const { products, item } = props;
  return (
    <div className="CartItem">
    <img src={products[item.index].img1} alt=""/>
    <div className="itemName">{products[item.index].name}</div>
    <div className="itemPrice">{products[item.index].price + ' USD'}</div>
    <div className="quantityAdjust">{item.quantity}</div>
    <div>Delete</div>
    </div>
  );
}
 
export default CartItem;