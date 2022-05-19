import React, { useEffect, useState } from "react";
import Card from "../../Component/Card/Card";
import products from "../../dataBase/storeData.json";
import "./Products.style.css";
const Products = () => {
  const getCategories = Array.from(
    new Set(products.map((item) => item.Category))
  );

  const [category, setCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(products);
    // setCategory(getCategories[0]);
    setFilteredProducts(() => {
      return category
        ? products.filter((item) => item.Category === category)
        : products;
    });
  }, [category]);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-header" style={{ background: "#ff3" }}>
                Categories
              </div>
              <ul className="list-group list-group-flush">
                <li
                  className="list-group-item"
                  onClick={() => setFilteredProducts(products)}
                >
                  All Category
                </li>
                {getCategories.map((category, index) => {
                  return (
                    <li
                      key={index}
                      className="list-group-item"
                      onClick={(e) => setCategory(e.target.innerText)}
                    >
                      {category}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card-list">
              {filteredProducts.slice(0, 20).map((item, index) => {
                return item && <Card key={index} items={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
