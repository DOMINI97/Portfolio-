import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

import Animation from "../animation/animation";
import Header from "../Header/Header";

const Hero = () => {
  return (
    <div className='Hero'>
      <Header />
      <div className=''>
        <div className='itmes  '>
          <div className='animation-section'>
            <Animation />
          </div>
        </div>
        <div className=' btns  '>
          <button className='btn-View'>View members</button>
          <buttons className='btn-Shop'>Shop</buttons>
        </div>
      </div>
    </div>
  );
};

export default Hero;
