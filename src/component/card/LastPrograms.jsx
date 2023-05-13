
import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LastPrograms(props) {


  const data = props?.lastPrograms;

console.log('lastPrograms',data  || [])

  return (
    <>
    {/* {
        

        (data || []).map((item) => (
            <CardItem
              title={item.title}
              description={item.description}
              buttonTitle={"مشاهده"}
              imgurl={"Birthday.jpg"}
              className="my-2"
            />
          ))
    } */}
    
    </>
  );
}
