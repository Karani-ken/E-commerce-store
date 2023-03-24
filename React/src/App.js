import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Cart from './components/Cart'
function App() {
  return (
    <div className="App">

<Router>
  <ToastContainer/>
  <Navbar />
  <Routes>
    <Route path='/' exact element={<Home />} />
    <Route path='/cart' exact element={<Cart />} />
  </Routes>
  <Footer />
</Router>


</div>
);
}

export default App;
