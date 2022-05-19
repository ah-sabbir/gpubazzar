import React from "react";
import Card from "../../Component/Card/Card";
import products from "../../dataBase/storeData.json";
import "./Products.style.css";
const Products = () => {
  const getCategories = Array.from(
    new Set(products.map((item) => item.Category))
  );

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
                <li className="list-group-item">All Category</li>
                {getCategories.map((category, index) => {
                  return (
                    <li key={index} className="list-group-item">
                      {category}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card-list">
              {products.slice(0, 20).map((item, index) => {
                console.log(item.Image_1);
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
