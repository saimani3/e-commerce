import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Assets/styles/productlist.css';
import Navbarlogin from './Navbarlogin';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Search from '../compounds/Search';
const NonVeg = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch product data from the API
    axios.get('http://localhost:5000/getdata')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  const handleBuyNow = (product) => {
    // Handle buy now functionality
    console.log('Buy Now:', product);
  };

  const handleAddToCart = (product) => {
    // Handle add to cart functionality
    // setCartItems([...cartItems, product]);
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    window.location.reload();
    // navigate('/Cart');
  };
  return (
    <>
    <Navbarlogin />
    <Search />
    <div className="product-list">
      {products.map(product => (
        <div key={product.Productid} className="product-card">
          {/* <div className="product-rating">{renderRatingStars(product.rating)}</div> */}
          <img src={product.ProductImage} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.Productname}</h3>
          <p className="product-description">{product.Description}</p>
          <b> ₹{product.Price}</b>
          <div className="product-buttons">
            <button className="buy-now-button" onClick={() => handleBuyNow(product)}>Buy Now</button>
            <button
            className="add-to-cart-button"
            disabled={cartItems.includes(product)}
            onClick={() => handleAddToCart(product)}
          >
            {cartItems.includes(product) ? 'Added' : 'Add to Cart'}
          </button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};


export default NonVeg;
