import React from 'react';
import '../Assets/styles/SideBar.css';
// import img from '../Assets/images/background.jpg';
import {House,PersonFill,CartCheckFill,HeartFill} from 'react-bootstrap-icons';
const SideBar = () => {
  return (
    <div className='side-main'>
        <div>
          <p className='companyname'>NSM FOOD</p>
        </div>
        <hr/>
        <div>
          <ul className='admin'>
            <li>
              <a href='' className='alink'><House  className='icons'/> Dashboard</a>
            </li>
            <li>
              <a href='' className='alink'><HeartFill className='icons' />ProductManagement</a>
            </li>
            <li>
              <a href='' className='alink'><PersonFill className='icons' />CustomerManagement</a>
            </li>
            <li>
              <a href='' className='alink'><CartCheckFill className='icons'/>OrderManagement</a>
            </li>
          </ul>
        </div>



    </div>
  )
}

export default SideBar