import React from 'react';
import {Trash,CartCheck} from 'react-bootstrap-icons';
import '../Assets/styles/Cart.css';
// import { toast } from 'react-toastify';
import Navbarlogin from './Navbarlogin';
const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const handleRemoveItem = (Productid) => {
    const updatedCartItems = cartItems.filter((item) => item.Productid !== Productid);
    window.location.reload(localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)));
    // toast.success("Added to Cart");
    // Refresh the component or update the state if needed
  };
  return (
    <div>
      <Navbarlogin />
      <h1 className='title-cart'>Cart Page</h1>
      {cartItems && cartItems.length > 0 ?(
        <div className="table-container">
        <table border={1} className='table-products'>
         <thead>
           <tr>
             <th>S.NO</th>
             <th>Product Image</th>
             <th>Product Name</th>
             <th>Price</th>
             <th>Remove</th>
           </tr>
         </thead>
         <tbody className='body-table'>
         {cartItems.map((item,index) => (
             <tr key={index}>
               <td>{index+1}</td>
               <td><img src={item.ProductImage} alt='productimage' className='products-images'/></td>
               <td>{item.Productname}</td>
               <td>₹{item.Price}</td> 
               <td>
                 <Trash onClick={() => handleRemoveItem(item.Productid)}/>
               </td>
             </tr>
             ))}
              <tr>
                <td colSpan={5}>
                <h5 className='price-total'>Total:</h5>
                </td>
             </tr>
         </tbody>
       </table>
       </div> 
      ) : (
         <p style={{margin:"10px 0px 0px 0px",textAlign:"center",fontSize:"100px"}}><CartCheck className='empty-cart'/><br/>Your cart is empty.</p>
      )}
      </div>
  );
};

export default Cart;
