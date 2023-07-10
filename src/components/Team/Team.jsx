import "./styles.css";
import img1 from "./images/konflict.png";
import img2 from "./images/arda.png";
import img3 from "./images/thunder.png";
import img4 from "./images/trex.png";
import img5 from "./images/coldzera.png";
import img6 from "./images/dove.png";
import img7 from "./images/axiios.png";

const Team = () => {
  return (
    <div className='TEAM'>
      <div className='teams'>
        <div className='img-team'>
          <img src={img1} alt='' />
          <img src={img2} alt='' />
          <img src={img3} alt='' />
          <img src={img4} alt='' />
          <img src={img5} alt='' />
        </div>
        <h1>CSGO TEAM</h1>
      </div>
      <div className='container'>
        <divider></divider>
      </div>
      <div className='cont-img'>
        <img src={img6} alt='' />
        <img src={img7} alt='' />
      </div>
      <h1>CONTENT CREATORS</h1>
    </div>
  );
};

export default Team;
