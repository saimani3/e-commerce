import React from 'react';
import '../Assets/styles/Adminpanel.css';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Dashboard from './Dashboard';
import ProductManagement from './ProductManagement';
const Adminpanel = () => {
  return (
    <div>
     <div className='side'>
<SideBar />
     </div>
<div className='contentmain'>
<div className='Navbar'><NavBar /></div>
<div className='mainfiles'>
  <ProductManagement />
</div>

</div>
    </div>
  )
}

export default Adminpanel;