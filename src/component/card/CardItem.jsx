// import { Button } from "bootstrap";
import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";
// import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Card.module.scss";
import { useRouter } from "next/router";
import { IMG_URL } from "@/constant";

export default function CardItem({
  title,
  description,
  imgUrl,
  buttonTitle,
  date,
  id,
  isUrban,
}) {
  console.log(title, description);

  const router = useRouter();

  const handleViewProgram = (id) => {
    if (isUrban) {
      router.push({
        pathname: "/urbanPrograms/[id]",
        query: { id: id },
      });
    } else {
      router.push({
        pathname: "/nonUrbanPrograms/[id]",
        query: { id: id },
      });
    }
  };

  return (
    <>
      <Card className={styles.flexRow}>
        <div className={styles.divImg}>
          <CardImg alt={title}  src={`${IMG_URL}/${imgUrl}`} top className={styles.img} />
        </div>

        <CardBody className={styles.CardBody}>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardText>{date}</CardText>
          <CardText>{description}</CardText>
          <div className={styles.divButton}>
            <Button onClick={() => handleViewProgram(id)}>{buttonTitle}</Button>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
