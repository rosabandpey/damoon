import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import styles from "../../component/home/style/blog-slider.module.scss";
import { Button } from "reactstrap";

import { PROGRAM_TYPE } from "./constant/ProgramType";
import { getProgramsServiceById } from "@/services/api";
import { useRouter } from "next/router";
import { chooseCapmType, dateFunc, IMG_URL } from "@/constant";

export default function BlogSlider({ slideData }) {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const chooseProgramType = (id) => {
   
    return PROGRAM_TYPE[id];
  };

  const handleViewProgram = (id) => {
    console.log("test");
    // router.push('/program');

    router.push({
      pathname: "/program/[id]",
      query: { id: id },
    });
  };

  const getHours=(h)=>{
    let min=h%100
    let hour=(h-min)/100
    console.log('hour',hour)
    console.log('min',min)
    return  min==0 ? hour : `${hour}:${min}`
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
            src={`${IMG_URL}/${item.imgUrl}`}
            alt={item.title}
            className="d-block w-100"
            style={{ height: "600px" }}
          />

          <Carousel.Caption>
            <div className={styles.flexRow}>
              <div>
                <label className={styles.title}>{item.title}</label> -{" "}
                <label>
                  {
                    item.programType===1 ?  dateFunc(item.startDateYear,item.startDateMonth,item.startDateDay) +' - '+ `ساعت ${getHours(item.startHour)}`: 
                    
                    ((dateFunc(item.startDateYear,item.startDateMonth,item.startDateDay)==dateFunc(item.endDateYear,item.endDateMonth,item.endDateDay)) ? dateFunc(item.startDateYear,item.startDateMonth,item.startDateDay) :
                      dateFunc(item.startDateYear,item.startDateMonth,item.startDateDay)+' '+ 'الی '+
                   
                    dateFunc(item.endDateYear,item.endDateMonth,item.endDateDay))
}
                  
                  {' '}
                  (برنامه {chooseProgramType(item.programType)})
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
                  <Button
                    type="submit"
                    className="btn btn-danger"
                    onClick={() => handleViewProgram(item.id)}
                  >
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
                <label>هزینه برنامه: {item.programType===1 ? 'رایگان' : `${item.price.toLocaleString('fa-IR')} تومان`} </label>
              </div>
              <div>
                <label> طول مسیر: {item.distance} کیلومتر</label>
              </div>
              <div>
                <label>  { item.campType!=0 && `اقامت: ${chooseCapmType(item.campType)}` }</label>
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
