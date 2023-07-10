import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import img from "./images/image.png";
import img3 from "./images/image4.png";

const Shop = () => {
  return (
    <section id='Shop'>
      <div className='ourNew '>
        <div className='wre-content'>
          <div>
            {" "}
            <h1>
              OUR NEWEST <br></br> COLLECTION
            </h1>{" "}
            <span>25% OFF!</span>
          </div>
          <button className='btn-Shop'>Shop Now</button>
        </div>
        <div className='img-container'>
          <img src={img} className='img-small' alt='small' />
          <img src={img} className='img-medium' alt='Medim' />
          <img src={img3} className='img-large' alt='large' />
        </div>
      </div>
    </section>
  );
};

export default Shop;
