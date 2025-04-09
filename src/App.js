import { Navbar } from './component/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Cart  from './Pages/Cart/Cart';
import Shop from './Pages/Shop/Shop';
import About from './Pages/About/About';
import Footer from './component/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Shop/>} /> {/* Pass as JSX element */}
          <Route path="/cart" element={<Cart />} /> {/* Pass as JSX element */}
          <Route path="/about" element={<About/>} /> {/* Pass as JSX element */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;