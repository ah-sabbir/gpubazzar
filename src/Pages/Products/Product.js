import {
  faCartPlus,
  faHeart,
  faStar,
  faStarHalf,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import database from "../../dataBase/storeData.json";

const Product = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  useEffect(() => {
    const temp =
      params.id &&
      setProduct(database.filter((item) => item.id === Number(params.id))[0]);
  }, [params.id]);

  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <div className="product-image">
              {product.Image_1 && (
                <Image
                  src={product.Image_1}
                  height={500}
                  width={400}
                  alt={product.name}
                />
              )}
            </div>
          </Col>
          <Col md={6}>
            <div className="product-info">
              {product.Title && <h1>{product.Title}</h1>}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.
                Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.
              </p>
              <div className="product-rating">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalf} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
                <span>(3 reviews)</span>
              </div>
              <del>
                <h3 className="product-price">
                  {product.BeforeDiscountPrice} ৳
                </h3>
              </del>
              <h3 className="product-price">{product.AfterDiscountPrice} ৳</h3>
              <p>
                <Button variant="primary">
                  <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
                </Button>
              </p>
              <p>
                <Button variant="primary">
                  <FontAwesomeIcon icon={faHeart} /> Add to Wishlist
                </Button>
              </p>
              <p>
                <b>Description: </b>Colorful iGame GeForce RTX 3060 Ti Advanced
                OC LHR-V 8GB GDDR6 Graphics CardThe Colorful iGame RTX 3060 Ti
                Advanced OC LHR-V features 8nm Manufacturing Process. It comes
                with a core clock speed of 1410Mhz and a boost clock of 1665Mhz.
                It offers a One-Key OC up to 1800Mhz. The Colorful iGame RTX
                3060 Ti Advanced OC LHR-V comes with 4864 CUDA cores. It comes
                with a memory speed of 14Gbps. The memory bandwidth is 448GB/s.
                It comes with a 2x 8 Pin power connector. It requires a power
                supply of 8+2 and has a TDP of 240W. The Colorful iGame RTX 3060
                Ti Advanced OC LHR-V comes with 3 Display ports and an HDMI port
                for the video output option. The Colorful iGame RTX 3060 Ti
                Advanced OC LHR-V comes with 3 years of warranty.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Product;
