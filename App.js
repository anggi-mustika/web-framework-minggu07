import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import HeaderAtas from './Components/navbar';
import { Routes, Route } from "react-router-dom";
import Aboute from './Components/Aboute';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
     <HeaderAtas/>
 
     <Routes>
     <Route exact path="/" element={<Home/>} />
     <Route exact path="/home" element={<Home/>} />
     <Route exact path="/aboute" element={<Aboute/>} />
     <Route exact path="/Contact" element={<Contact/>} />
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
