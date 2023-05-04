import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import styles from "../../component/home/style/blog-slider.module.scss";
import { Button } from "reactstrap";

export default function BlogSlider({ slideData }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      style={{ width: "100%" }}
    >
      {(slideData || []).map((item, index) => (
        <Carousel.Item key={index}>
          <img
            src={`http://84.241.11.4:1080/uploads/programs/${item.imgurl}`}
            alt={item.title}
            className="d-block w-100"
            style={{height:'600px'}}
          />

          <Carousel.Caption>
            <div className={styles.flexRow}>
              <div>
                <label className={styles.title}>{item.title}</label> -{" "}
                <label>(تاریخ)</label>
              </div>
              <div>
                <Button type="submit" className="btn btn-danger">
                  ثبت نام
                </Button>
              </div>
            </div>

            {/* <p style={{textShadow: "1px 1px #fff",color:"#f00"}}>{item.price}</p> */}
            <p className={styles.des}>{item.description}</p>
            <div className={styles.propRow}>
              <div>
                <label>درجه سختی: {item.degree} از 10</label>
              </div>
              <div>
                <label>هزینه برنامه: {item.price}  تومان</label>
              </div>
              <div>
                <label> طول مسیر: {item.distance} کیلومتر</label>
              </div>
              <div>
              <label> اقامت:{item.camptype}</label>
                {/* <Image
                  src={require(`../../../assets/img/camptype-${item.camptype}.png`)}
                  className="d-block w-100"
                /> */}
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
