import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './Card.module.scss'
import { CardTitle } from "reactstrap";

export default function LastPrograms(props) {
  const data = props?.lastPrograms;

  console.log("lastPrograms", data || []);

  return (
    
     <div    className={styles.cardList}>
        <CardTitle tag="h5" className={styles.title}>برنامه های شهری اجرا شده</CardTitle>

      {(data || []).map((item) => (
       
          <CardItem
            title={item.title}
            description={item.description}
            buttonTitle={"مشاهده"}
            imgUrl={"Birthday.jpg"}
            className="my-2"
            key={item.id}  
          />
      
      ))}
      </div>
  );
}
