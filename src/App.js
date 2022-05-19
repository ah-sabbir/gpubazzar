import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Component/Shared/Header/Header";
import About from "./Pages/About/About";
import Cart from "./Pages/Cart/Cart";
import Contact from "./Pages/Contact/Contact";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<Navigate to="/" />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        {/*  public restricated routes start */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
