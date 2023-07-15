import React from 'react'
import NavBar from '../compounds/NavBar';
import Slider from '../compounds/Slider';
import Search from '../compounds/Search';
import Nonveg from '../compounds/Nonveg';
import About from '../compounds/About';
import Services from '../compounds/Services';
import Contacts from '../compounds/Contacts';
const Index = () => {
  return (
    <div>
         <NavBar/>
       <Search />
       <Slider />
       <About />
       <Nonveg />
       <Services />
       <Contacts />
    </div>
  )
}

export default Index;