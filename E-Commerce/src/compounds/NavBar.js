import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Assets/images/logo1.png';
import '../Assets/styles/Nav.css';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand
} from 'reactstrap';
const NavBar = () => {
    // Collpase isOpen State
    const [isOpen, setIsOpen] = React.useState(false);
    const [showModal, setShowModal] = useState(false);
    const [login,setLogin] = useState(false);
    const Closemodal= ()=>{
        setShowModal(false);
        setLogin(false);
    }
    const Openmodal =()=>{
        setShowModal(true);
    }
    const loginform =()=>{
        setLogin(true);
    }
const [userdata,setuserdata] = useState({
    name:'',
    email:'',
    password:'',
    confirmpassword:''
})
const {name,email,password,confirmpassword} = userdata;
const handleChange =(e)=>{
    setuserdata({...userdata,[e.target.name]:[e.target.value]});
}
const handleSubmit=async(e)=>{
e.preventDefault();
// console.log(userdata);
if(userdata.password.toString() === userdata.confirmpassword.toString()){
    try{
        const response = await axios.post('http://localhost:5000/register',userdata);
        setuserdata({...userdata,name:'',email:'',password:'',confirmpassword:''});
        toast.success(response.data);
        setShowModal(false);
      }catch (error) {
        console.log(error);
      }
}
else{
    toast.warning("password is not matched")
}
}
const [loginvalue,setloginvalue] = useState({
    Email:'',
    Password:'',
})
const {Email,Password} = loginvalue;
const handleChange1 =(e)=>{
    setloginvalue({...loginvalue,[e.target.name]:[e.target.value]});
}
const logindata = async(e)=>{
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/login',loginvalue);
        setloginvalue({...loginvalue,Email:'',Password:''});
        toast.success(response.data);
        setLogin(false);
      } catch (error) {
        console.log(error);
      }
}
  return (
    <>
            <Navbar color="light" light expand="md" className='Navbarmain'>
                <NavbarBrand>
                    <img src={logo} className='logo' alt='logo'/>
                </NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#">HOME</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Productlist">PRODUCTS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">ABOUT</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">SERVICES</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">CONTACT</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" onClick={loginform}>SIGN IN</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='#' onClick={Openmodal}>SIGN UP</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Modal show={showModal} onHide={Closemodal}>
        <Modal.Header closeButton>
          <Modal.Title>SIGN UP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder='Enter Your name....'
                name='name'
                value={name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Example@gmail.com"
                value={email}
                name='email'
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
              type='password' 
              placeholder='Password'
              value={password}
              name='password'
              onChange={handleChange}
               />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                value={confirmpassword}
                name='confirmpassword'
                onChange={handleChange}
              />
            </Form.Group>
            <br/>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
     

      <Modal show={login} onHide={Closemodal}>
        <Modal.Header closeButton>
          <Modal.Title>SIGN IN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={logindata}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Example@gmail.com"
                value={Email}
                name='Email'
                onChange={handleChange1}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
              type='password' 
              placeholder='Password'
              value={Password}
              name='Password'
              onChange={handleChange1}
               />
            </Form.Group>
            <br/>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
            </>
  )
}

export default NavBar;