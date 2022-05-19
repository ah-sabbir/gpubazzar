import React from "react";
import Card from "../../Component/Card/Card";
import SlideCard from "../../Component/Slider/Slider";
import dataset from "../../dataBase/storeData.json";
import "./Home.style.css";
const Home = () => {
  return (
    <>
      <section className="slider-content">
        <SlideCard />
      </section>
      <section className="container Cards">
        {dataset.slice(1, 10).map((item, index) => {
          return item && <Card items={item} key={index} />;
        })}
      </section>
    </>
  );
};

export default Home;
