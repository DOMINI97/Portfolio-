import "./style.css";
import logo from "./Logo.png";
const Footer = () => {
  return (
    <nav className='Footer'>
      <div className='shop-btn'>
        <h1>Go TO</h1>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Team</li>
          <li>CS:GO</li>
          <li>Content Creators</li>
          <li>Contact</li>
        </ul>
        <h3>Shop.teamchr.nl</h3>
      </div>
      <div className='img-container'>
        <img src={logo} className='img-responsive' alt='Tasveer' />
      </div>
      <div className='Links'>
        <div>
          <h1>Contact</h1>
          <h2>Press@chrono-esports.com</h2>
          <h2>Team@chrono-esports.com</h2>
        </div>
        <div>
          {" "}
          <h3>linktr.ee/teamchr</h3>
        </div>
        <div className='copy-right'>
          <h2>
            Copyright TeamCHR/<br></br>
            <span>Chrono Esports</span>
          </h2>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
