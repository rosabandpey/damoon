// import { Button } from "bootstrap";
import React from "react";
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
// import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import styles from './Card.module.scss'

export default function CardItem({ title, description,imgUrl,buttonTitle}) {

  console.log(title, description)
  return (
    <>
 
    <Card  className={styles.flexRow}>
      <div className={styles.divImg}>
      <CardImg
        alt={title}
        src={`http://192.168.1.36/uploads/programs/${imgUrl}`}
        top
        className={styles.img}
      />
      </div>
    
      <CardBody className={styles.CardBody}>
        <CardTitle tag="h5">{title}</CardTitle>

        <CardText>
         {description}
        </CardText>
       
      </CardBody>
<div className={styles.divButton}>
<Button>{buttonTitle}</Button>
</div>
      
    </Card>
    </>
  );
}
