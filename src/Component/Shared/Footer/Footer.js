import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.ico";
const Footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className="text-center text-lg-start bg-light text-muted">
        {/* <!-- Section: Social media --> */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* <!-- Left --> */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* <!-- Left --> */}

          {/* <!-- Right --> */}
          <div>
            <Link to={"#"} className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to={"#"} className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to={"#"} className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </Link>
            <Link to={"#"} className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to={"#"} className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link to={"#"} className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </Link>
          </div>
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <img
                    src={logo}
                    alt=""
                    width={100}
                    height={100}
                    className="img-fluid"
                  />
                  {/* src=
                   
                    
                  /> */}
                  GPU Bazzar
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Laravel
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> 10-H, R-10, Block-C,
                  Rampura Banasree, Dhaka-1219
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@gpubazzar.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 89
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2022 Copyright:
          <Link className="text-reset fw-bold" to="#">
            <span>gpubazzar.com</span>
          </Link>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </>
  );
};

export default Footer;
