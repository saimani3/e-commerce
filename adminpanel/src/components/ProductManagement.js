import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Search} from 'react-bootstrap-icons';
import { Modal, Button, Form } from 'react-bootstrap';
// import {useNavigate} from 'react-router-dom';
import '../Assets/styles/products.css';
import { toast } from 'react-toastify';
const ProductManagement = () => {
  // const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  // const [loading, setLoading] = useState(true);
  const [productsdata,setData] = useState({
    ProductImage: "",
  Productname:"",
  Description:"",
  Price:"",
  ProductType:""
  })
  const {ProductImage,Productname,Description,Price,ProductType} = productsdata;
  const handleChange = e =>{
    setData({...productsdata,[e.target.name]:[e.target.value]});
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
   try{
    const response = await axios.post('http://localhost:5000/post',productsdata);
    setData({...productsdata,ProductImage:'',Productname:'',Description:'',Price:'',ProductType:''});
    // navigate('/');
    // window.location.reload(false);
    // toast.success("Product Added Succesfully");
    toast.success(response.data);
    // setData(productsdata)
  }catch (error) {
    console.log(error);
  }
 }
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch data from the server
      const response = await axios.get('http://localhost:5000/getdata');

      // Update state with the fetched data
      // console.log(response);
      // console.log(response)
      setProducts(response.data);
      // setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (Productid) => {
    // const Productid = products.Productid;
    if(window.confirm("Are you sure to delete product")){
    try {
      // Delete the product on the server
     const response = await axios.get(`http://localhost:5000/delete/${Productid}`);
      // setProducts(data)
      toast.success(response.data);
      // Remove the product from the state
      // setProducts(products.filter((product)=>product.Productid === Productid));
    } catch (error) {
      console.log(error);
    }
  }
  };
  return (
    <div className="product-management">
      <div className='prodiv'>
        <div className='Search-products'>
        <input  className='Search' placeholder="Search Products" aria-label="Search" type='Search'/><button><Search/></button>
        </div>
        <div className='add-prodcuts'>
          <button onClick={handleShowModal}>Add Products</button>
        </div>
      </div>
      <div className="table-container">
       <table border={1} className='table-products'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Product Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className='body-table' max_rows='5'>
          {products.map((product,index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td><img src={product.ProductImage} alt='productimage' className='products-images'/></td>
              <td>{product.Productname}</td>
              <td>{product.Description}</td>
              <td>${product.Price}</td>
             <td>{product.ProductType}</td>

              <td>
                <button onClick={()=>handleDelete(product.Productid)} className='bg-primary'>Delete</button>
                <button onClick={() => handleDelete(product.Productid)} className='bg-info'>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Product Image</Form.Label>
              <Form.Control
                type="file"
                value={ProductImage}
                name='ProductImage'
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                value={Productname}
                name='Productname'
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" value={Description}
              onChange={handleChange}
              name='Description' required/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Price"
                value={Price}
                name='Price'
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>ProductType</Form.Label>
             <Form.Control as="select" value={ProductType} onChange={handleChange} name='ProductType' required>
              <option value="select">select</option>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
              <option value="IceCream">IceCream</option>
              <option value="Drink">Drink</option>
             </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" className='productdata-submit'>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      
    </div>
  
  );
};

export default ProductManagement;