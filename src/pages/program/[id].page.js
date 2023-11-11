import React, { useEffect, useState } from "react";
import { getNewPrograms, getProgramsServiceById } from "@/services/api";
import { chooseCapmType, dateFunc, IMG_URL } from "@/constant";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './style/[id].module.scss'
export default function ProgramId(props) {
  const { data } = props;

  console.log("data", data);
  return (
    <>
      <div className="d-flex justify-content-center flex-column align-items-center h-100  mt-3 ">
        <div style={{ width: "80%" }} className="">
          {data &&
            data.map((item, key) => (
              <div key={key}>
                <img
                  src={`${IMG_URL}${item.imgUrl}`}
                  className="d-block w-100"
                  style={{ height: "500px", width: "100%" }}
                />
              </div>
            ))}
        </div>

        <table
          class="table table-light table-bordered "
          responsive
          style={{ width: "80%" }}
        >
        

          <tbody>
            {data &&
              data.map((item, key) => (
                <>
                  <tr key={key}>
                    <th scope="col">تاریخ سفر</th>
                    <td>
                      {dateFunc(
                        item.startDateYear,
                        item.startDateMonth,
                        item.startDateDay
                      )}
                    </td>
                    <th scope="col">درجه سختی</th>
                    <td>{item.degree}</td>
                  </tr>
                  <tr>

                 
                  <th scope="col">هزینه</th>
                  <td>{item.price.toLocaleString('fa-IR')}</td>
                  <th scope="col">طول مسیر</th>
                  <td>{item.distance}</td>
                  </tr>
                  <tr>
                    {item.campType!=0 ? 
                    <>
                    <th scope="col">نوع اقامت</th>
                    <td>{chooseCapmType(item.campType)}</td> 
                    <th></th>
                    </>    
                    : null

                    }
                   
                   
                   
                  </tr>
                  <tr className={styles.trJoinProgram}>
                  <td className={styles.tdJoinProgram}>
                    <button type="button" class="btn btn-primary">شرایط شرکت</button>
                    </td>
                  </tr>
                </>
              ))}
          </tbody>
        </table>

        {data.map((item, key) => (
          <div className="text-center my-5">{item.Body}</div>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  console.log("context", context);
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
