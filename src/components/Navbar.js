import { Link } from "react-router-dom";
import { LocalMall }from '@material-ui/icons';

const Navbar = (props) => {
  const { total } = props;
  return (
    <div className="Navbar">
      <div className="title">Desiderata</div>
      <div className="Links">
        <Link to='/shopping-cart/'>Home</Link>
        <Link to='/shopping-cart/shop'>Shop</Link>
        <Link to='/shopping-cart/cart' className="navbar-cart">
          <LocalMall fontSize="large"></LocalMall>
          <div className="cart-quantity">{total}</div>
        </Link>
      </div>
    </div>
  );
};
 
export default Navbar;