import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Component/Commons/Cart/Cart";
import Header from "./Component/Commons/Header/Header";
import About from "./Component/Pages/About/About";
import Contact from "./Component/Pages/Contact/Contact";
import Home from "./Component/Pages/Home/Home";
import Profile from "./Component/Pages/Profile/Profile";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<Navigate to="/" />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/*  public restricated routes start */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
