import React, { useEffect, useState } from "react";
import { getNewPrograms, getProgramsServiceById } from "@/services/api";
import { chooseCapmType, dateFunc, IMG_URL } from "@/constant";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "reactstrap";

export default function ProgramId(props) {
  const { data } = props;

 

  return (
    <>
     <div className="d-flex justify-content-center flex-column align-items-center h-100   my-2" >
     
     <div style={{width:'80%'}} className="my-5">
     {data.map((item, key) => (
      <img
         src={`${IMG_URL}${item.ImgUrl}`}
         className="d-block w-100"
         style={{ height: "500px" ,width: "100%" }}
      />
      ))}
     </div>
     
      

     
      <table class="table table-light table-bordered " responsive style={{width:'80%'}} >
          <thead>
            <tr>
              <th scope="col" > سفر</th>
              <th scope="col">نوع اقامت</th>
              <th scope="col">قیمت</th>
              <th scope="col">درجه سختی</th>
              <th scope="col">طول مسیر</th>
              <th scope="col">تاریخ سفر</th>
              
            </tr>
          </thead>

          <tbody>
            {data.map((item, key) => (
              <tr key={key}>
                
                <td >
                  {item.Title}
                </td>
                <td>
                 {chooseCapmType(item.CampType)}
                </td>
                <td>
                 {item.Price}
                </td>
                <td>
                  {item.Degree}
                </td>
                <td>
                  {item.Distance}
                </td>
                <td>
                {dateFunc(
                    item.StartDateYear,
                    item.StartDateMonth,
                    item.StartDateDay
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {data.map((item, key) => (
     <div class="text-center my-5">{item.Body}</div>
      ))}
        
        </div>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  
  const res = await getProgramsServiceById(params.id);
  const data = res.data;

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const res = await getNewPrograms();
  const data = res.data;
  const paths = data.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return { paths, fallback: false };
}

// export const getServerSideProps = async (context) => {

//   const {params}=context
//   console.log('param',params)
//   const res=await getProgramsServiceById(params.id)
//   const data =res.data

//   return {
//     props: {
//       data,
//     },
//   };
//   return { props: { paramsId: context.params.id } };
// };
