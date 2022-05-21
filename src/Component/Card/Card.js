import React from "react";
import { Link } from "react-router-dom";
import "./Card.style.css";
const Card = (props) => {
  const {
    id,
    Discounts,
    Descriptions,
    Image_1,
    Image_2,
    Title,
    BeforeDiscountPrice,
    AfterDiscountPrice,
    Category,
  } = props.items;
  //   console.log(props.items);
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={Image_1} className="card-img-top" alt="..." />
        <div className="card-body">
          {Discounts && (
            <span className=" btn-danger " tyle={{ padding: "15px" }}>
              Discounts: {Discounts} %
            </span>
          )}
          <Link
            to={`/products/${id}`}
            style={{
              textDecoration: "none",
              color: "#333",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            <h5 className="card-title">{Title}</h5>
          </Link>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button className="btn btn-success">
            <Link to={"/cart"}>Add to Cart</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
