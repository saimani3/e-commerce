// import NavBar from "./components/NavBar";
// import SideBar from "./components/SideBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Adminpanel from "./components/Adminpanel";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <ToastContainer position="top-center" />
       <Routes>
        <Route exact path="/" element={ <Adminpanel />} />
       </Routes>
          </div>
  );
}

export default App;
