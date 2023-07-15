import React,{useState} from "react";
import nonveg from '../Assets/images/nonveg.png';
import '../Assets/styles/Nonveg.css';
import Veg from './Veg';
import Ice from './Icecream';
import Drink from './Drinks';
import { Cart ,Heart} from 'react-bootstrap-icons';

const Nonveg =()=>{
  // const [isMouseOver, setIsMouseOver] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsMouseOver(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsMouseOver(false);
  // };

    const cartItems = [
        {
           id: 1,
           image:require('../Assets/images/Nonveg/n1.jpg'),
           },
        { id: 2,image:require('../Assets/images/Nonveg/n2.jpg'), },
        { id: 3,image:require('../Assets/images/Nonveg/n3.jpg'), },
        { id: 4,image:require('../Assets/images/Nonveg/n4.jpg'),},
        { id: 5,image:require('../Assets/images/Nonveg/n5.jpg'),},
        { id: 6,image:require('../Assets/images/Nonveg/n6.jpg'),},
        // Add more items as needed
      ];
    return(
        <div>
        <section  className="bg-parlex">
        <div className="parlex-back">
            <div className="container  text-center">
				<h2>Non-Veg</h2>
            </div>
        </div>
    </section>
    <div className="divnonveg" >
        <div style={{float:"left"}}>
        <img src={nonveg} className="nonimg"/>
        </div>
        <div style={{float:"rigth"}}>
        <button className="view-all-button">View All</button>
        <div className="cart-container">
        <div className="cart-items">
          {cartItems.map((item,index)=> (
            <div key={index} className="cart-item" style={{backgroundImage: `url(${item.image})`,backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            opacity:'0.5'}}>
              {/* {item.name} */}
              {/* {item.image} */}
              {/* <img src={item.image} 
              style={{width:"200px",height:"200px"}} /> */}
              {/* {isMouseOver && ( */}
        <div className="icon-container" style={{opacity:'1'}}>
          {/* <Cart /><Heart /> */}
          <button>BUY NOW</button>
        </div>
      {/* )} */}
            </div>
          ))}
        </div>
      </div>
        </div>
    </div>
    
    <Veg />
         <Ice />
         <Drink />
        </div>
         
    )
}
export default Nonveg;