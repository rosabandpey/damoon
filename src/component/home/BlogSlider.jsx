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
          <Image src={item.src} alt={item.alt} className="d-block w-100" />

          <Carousel.Caption>
            <div className={styles.flexRow}>
              <div>
                <label className={styles.title}>{item.title}</label> -{" "}
                <label>(تاریخ)</label>
              </div>
              <div>
                <Button type="submit" class="btn btn-danger">
                  ثبت نام
                </Button>
              </div>
            </div>

            {/* <p style={{textShadow: "1px 1px #fff",color:"#f00"}}>{item.price}</p> */}
            <p className={styles.des}>{item.description}</p>
            <div className={styles.propRow}>
              <div>
                <label>*****</label>
              </div>
              <div>
                <label>1.500 $</label>
              </div>
              <div>
                <label>40 Km</label>
              </div>
              <div>
                <label>Camp</label>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
