import React from "react";
import { Cart ,Search} from 'react-bootstrap-icons';
import '../Assets/styles/Search.css';
const Searc = () =>{
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    return(
        <>
        <div className="bg-dark">
        <div className="container">
            <div className="row">
                <div className="col-5">
        <input className='form-control' placeholder="Search Products" aria-label="Search" type='Search'/>
       </div>
       <div className="col-2 search">
        <button><Search /></button>
        </div>
        <div className="col-5 Cart">
            <a href="/Cart"><Cart className="Carts" />{cartItems.length}</a>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default Searc;