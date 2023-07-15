import './App.css';
import Index from './Pages/Index';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Productlist from './Pages/Productlist';
import Cart from './Pages/Cart';
import Register from './config/Register';
function App() {
  return (
    <div className="App">
       <ToastContainer position="top-center" />
       <Routes>
        <Route exact path="/" element={  <Index />} />
        <Route  path="/Productlist" element={  <Productlist  />} />
        <Route  path="/Cart" element={  <Cart />} />
        <Route path="Register" element={ <Register />} />
       </Routes>
    </div>
  );
}

export default App;
