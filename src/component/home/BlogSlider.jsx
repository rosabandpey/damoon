import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import styles from "../../component/home/style/blog-slider.module.scss";
import { Button } from "reactstrap";
import { CAMP_TYPE } from "./constant/CampType";
import { PROGRAM_TYPE } from "./constant/ProgramType";
import { getProgramsServiceById } from "@/services/api";
import { useRouter } from "next/router";

export default function BlogSlider({ slideData }) {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const chooseCapmType = (id) => {
    return CAMP_TYPE[id];
  };

  const chooseProgramType = (id) => {
    return PROGRAM_TYPE[id];
  };

  const dateFunc = (year, month, day) => {
    return `${year}/${month}/${day}`;
  };

  
  const handleViewProgram=(id)=>{
    console.log('test')
    // router.push('/program');

    router.push({
      pathname: '/program/[pid]',
      query: { pid: id },
    });
   
  }

 

 

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      style={{ width: "100%" }}
    >
      {(slideData || []).map((item, index) => (
        <Carousel.Item key={index}>
          <img
            src={`http://84.241.11.4/uploads/programs/${item.imgUrl}`}
            alt={item.title}
            className="d-block w-100"
            style={{ height: "600px" }}
          />

          <Carousel.Caption>
            <div className={styles.flexRow}>
              <div>
                <label className={styles.title}>{item.title}</label> -{" "}
                <label>
                  {dateFunc(
                    item.startDateYear,
                    item.startDateMonth,
                    item.startDateDay
                  )}{" "}
                  الی{" "}
                  {dateFunc(
                    item.endDateYear,
                    item.endDateMonth,
                    item.endDateDay
                  )}
                  ( برنامه {chooseProgramType(item.programtype)} )
                </label>
              </div>
              {item.programtype == 2 ? (
                <div>
                  <Button type="submit" className="btn btn-danger">
                    ثبت نام
                  </Button>
                </div>
              ) : (
                <div>
                  <Button type="submit" className="btn btn-danger" onClick={()=>handleViewProgram(item.id)}>
                    شرایط برنامه
                  </Button>
                </div>
              )}
            </div>

       
            <p className={styles.des}>{item.description}</p>
            <div className={styles.propRow}>
              <div>
                <label>درجه سختی: {item.degree} از 10</label>
              </div>
              <div>
                <label>هزینه برنامه: {item.price} تومان</label>
              </div>
              <div>
                <label> طول مسیر: {item.distance} کیلومتر</label>
              </div>
              <div>
                <label> اقامت: {chooseCapmType(item.camptype)}</label>
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
