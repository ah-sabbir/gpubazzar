import React from "react";
import { Carousel } from "react-bootstrap";
import database from "../../dataBase/storeData.json";
import "./Slider.style.css";

const SlideCard = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <Carousel>
            {database &&
              database.map((item, index) => {
                return (
                  <Carousel.Item key={index}>
                    <div className="col-md-12">
                      <img
                        className="d-block w-50"
                        src={item.Image_2}
                        alt={item.name}
                      />
                    </div>
                    <div className="col-md-12">
                      <Carousel.Caption className="text-dark">
                        <h3>{item.Title}</h3>
                        <p>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                      </Carousel.Caption>
                    </div>
                  </Carousel.Item>
                );
              })}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default SlideCard;

// {/*  products slider */}
// <div className="container slider-content">
// <div className="row">
//   <div className="col-md-6">
//     <img src={dataset[0]["Image_1"]} height={400} width={500} alt="" />
//   </div>
//   <div className="col-md-6 slide-flex">
//     <h1>{dataset[0]["Title"]}</h1>
//     <p>{dataset[0]["Description"]}</p>
//     {/* price */}
//     <div className="prices">
//       <del>
//         {dataset[0]["BeforeDiscountPrice"]}
//         <span className="Price-currencySymbol">৳&nbsp;</span>
//       </del>
//       <span className="amount">
//         {dataset[0]["AfterDiscountPrice"]}
//         <span className="Price-currencySymbol">৳&nbsp;</span>
//       </span>
//     </div>
//     {/* add to cart */}
//     <button className="btn btn-danger">Add to Cart</button>
//   </div>
// </div>
// </div>
