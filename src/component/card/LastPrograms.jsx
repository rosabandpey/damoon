import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Card.module.scss";
import { CardTitle, NavLink } from "reactstrap";
import convertDate from "@/util/common";
import { IMG_URL } from "@/constant";

export default function LastPrograms(props) {
  const data = props?.lastPrograms;

  console.log("lastPrograms", data || []);

  return (
    <div className={styles.cardList}>
      <CardTitle tag="h5" className={styles.title}>
        {props.title}
      </CardTitle>
      <div className={styles.divCardItem}>
        {(data || []).map((item) => (
          <CardItem
            isUrban={props.isUrban}
            id={item.id}
            title={item.title}
            description={item.description}
            buttonTitle={"مشاهده"}
            imgUrl={`${IMG_URL}/${
              item.startDateYear +
              "-" +
              convertDate(item.startDateMonth) +
              "-" +
              item.startDateDay +
              "/001.jpg"
            }`}
            className="my-2"
            key={item.id}
            date={`${
              item.startDateYear +
              "-" +
              convertDate(item.startDateMonth) +
              "-" +
              item.startDateDay
            }`}
          />
        ))}
      </div>

      <a href="/user/3" className={styles.link}>
        {props.linkTitle}
      </a>
    </div>
  );
}
