import { getLastProgramsService } from "@/services/api";
import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";

export default function LastPrograms({lastPrograms}) {

//   const [data, setData] = useState([]);
//   const [loading,isLoading]=useState(false)

//   const getData =  () => {
//     getLastProgramsService(2).then((res)=>{
//         console.log(res);
//         setData(res.data);
//         isLoading(true)
//     });
  
//   };

//   useEffect(() => {
//     getData();
//   }, []);



console.log('lastPrograms',lastPrograms  || [])

  return (
    <>
    {
        

        (lastPrograms || []).map((item) => (
            <CardItem
              title={item.title}
              des={item.description}
              buttonTitle={"مشاهده"}
              imgurl={"Birthday.jpg"}
              className="my-2"
            />
          ))
    }
    
    </>
  );
}
