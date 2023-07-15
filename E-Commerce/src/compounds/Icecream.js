import React from "react";
import ice from '../Assets/images/icecream.png';
import '../Assets/styles/Nonveg.css';
const Icecream =()=>{
  const cartItems = [
    {
       id: 1,
       image:require('../Assets/images/Icecream/c1.jpg'),
       },
    { id: 2,image:require('../Assets/images/Icecream/c2.jpg'), },
    { id: 3,image:require('../Assets/images/Icecream/c3.jpg'), },
    { id: 4,image:require('../Assets/images/Icecream/c4.jpg'),},
    { id: 5,image:require('../Assets/images/Icecream/c5.jpg'),},
    { id: 6,image:require('../Assets/images/Icecream/c6.jpg'),},
    // Add more items as needed
  ];
    return(
        <div>
        <section  className="bg-parlex">
        <div className="parlex-back">
            <div className="container  text-center">
				<h2>Icecream</h2>
            </div>
        </div>
    </section>
    <div className="divnonveg">
        <div style={{float:"left"}}>
        <img src={ice} className="nonimg"/>
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
        </div>
    )
}
export default Icecream;