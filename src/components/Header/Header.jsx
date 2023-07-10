import "./styles.css";
import Logo from "./Images/Logo.png";
const Header = () => {
  return (
    <nav className='Navbar  background-transparent '>
      <div className=' Nav-bar d-flex '>
        <button className='shop-btn'>Shop</button>
        <img src={Logo} className='img-responsive' alt='Tasveer' />
      </div>
    </nav>
  );
};

export default Header;
