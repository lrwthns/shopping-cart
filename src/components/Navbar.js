import { Link } from "react-router-dom";
import { LocalMall }from '@material-ui/icons';

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="title">Desiderata</div>
      <div className="Links">
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/cart'>
          <LocalMall fontSize="large"></LocalMall>
        </Link>
      </div>
    </div>
  );
}
 
export default Navbar;