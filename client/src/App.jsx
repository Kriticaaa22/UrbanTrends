import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Signup from "./pages/Signup"
import Products from "./pages/Products"
import Login from "./pages/Login"
import { UserProvider } from "./UserContext/UserContext"
import ShoppingCart from "./pages/ShoppingCart"
import ProductDetail from "./pages/ProductDetail"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Favorite from "./pages/Favorite"
import ForgotPassword from "./pages/ForgotPassword"

function App() {


  return (
    <>
    <Router>
      <UserProvider>
        <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/products" element={<Products />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/favorites" element={<Favorite />} />
        
      </Routes>
      <Footer />
      </UserProvider>
    </Router>
    
    </>
  )
}

export default App
