import React,{useState} from 'react';
// import '../Assets/styles/Register.css';
import { Modal, Button, Form } from 'react-bootstrap';
const Register = () =>{
    const [showModal, setShowModal] = useState(true);
    return(
        <div className='main'>
             <Modal show={showModal} >
        <Modal.Header closeButton>
          <Modal.Title>SIGN UP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder='Enter Your name....'
                name='name'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Example@gmail.com"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
              type='password' 
              placeholder='Password'
               />
            </Form.Group>
            <Form.Group>
              <Form.Label>Conform Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Conform password"
              />
            </Form.Group>
            <br/>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
     
        </div>
    )
}
export default Register;