import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Homepage from "./components/userinterface/homepage/Homepage";
import Contact from "./components/userinterface/homepage/Contact";
import AboutUs from "./components/userinterface/homepage/AboutUs";

function App() 
{
  return (<div>
    
    <Router>
      <Routes>
        <Route element={<Homepage/>} path="/"></Route>
         <Route element={<Contact/>} path="/contact"></Route>
         <Route element={<AboutUs/>} path="/about"></Route>
      </Routes>
    </Router>

  </div>)
}

export default App
