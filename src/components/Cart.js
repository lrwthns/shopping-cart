import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const { products, items, total, changeState } = props;
  return (
    <div className="Cart">
      <div className="cart-header">MY SHOPPING CART</div>
      { items.length === 0 && <div className="empty-cart">Your cart is empty.</div> }
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
        <Link to='/shop'>{'< Go Back'}</Link>
        <div>{'TOTAL ' + total + ' USD'}</div>
        <Link to='/'>{'Checkout >'}</Link>
      </div>
    </div>
  );
}
 
export default Cart;