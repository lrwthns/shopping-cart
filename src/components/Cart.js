import CartItem from "./CartItem";

const Cart = (props) => {
  const { products, items, total, changeState } = props;
  return (
    <div className="Cart">
      <div className="cart-header">MY SHOPPING CART</div>
      <div className="cartItem-container">
      {
        items.map((item, index) => {
          return (
            <CartItem products={products} item={item} changeState={changeState} key={index}/>
          )
        })
      }
      </div>
      <div className="checkout-footer">
        <div>{'TOTAL ' + total + ' USD'}</div>
      </div>
    </div>
  );
}
 
export default Cart;