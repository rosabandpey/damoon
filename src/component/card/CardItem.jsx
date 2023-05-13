import { Button } from "bootstrap";
import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CardItem({ title, description, buttonTitle,imgurl}) {
  return (
    <Card>
      <CardImg
        alt={title}
        src={`http://84.241.11.4:1080/uploads/programs/${imgurl}`}
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>

        <CardText>
         {description}
        </CardText>
        <Button>{buttonTitle}</Button>
      </CardBody>
    </Card>
  );
}
