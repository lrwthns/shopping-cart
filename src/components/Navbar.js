const { Link } = require("react-router-dom")

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="title">Desiderata</div>
      <div className="Links">
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/cart'>Cart</Link>
      </div>
    </div>
  );
}
 
export default Navbar;