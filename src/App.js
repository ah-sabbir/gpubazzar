import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./Component/Private/Router/PrivateRoute";
import Footer from "./Component/Shared/Footer/Footer";
import Header from "./Component/Shared/Header/Header";
import About from "./Pages/About/About";
import Cart from "./Pages/Cart/Cart";
import Contact from "./Pages/Contact/Contact";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Products from "./Pages/Products/Products";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<Navigate to="/" />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Navigate replace to="/" />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        {/*  public restricated routes start */}
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
