import NewProgramsDetail from "@/component/home/NewProgramsDetail";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getNewPrograms, getProgramsServiceById } from "@/services/api";
import Image from "next/image";

export default function ProgramId(props) {
  const { data } = props;

  console.log("data", data);

  return (
    <>
      <Image
        src="/profile.png"
        width={500}
        height={500}
        alt="Picture of the author"
      />

      <div className="table-responsive">
        <table className="table align-middle table-nowrap mb-0">
          <thead>
            <tr>
              <th scope="col"> سفر</th>
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
                <td>
                  <h5 className="text-muted m-5">{item.Title}</h5>
                </td>
                <td>
                  <h5 className="text-muted m-5">{item.CampType}</h5>
                </td>
                <td>
                  <h5 className="text-muted m-5">{item.Price}</h5>
                </td>
                <td>
                  <h5 className="text-muted m-5">{item.Distance}</h5>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  console.log("param", params);
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

  // Get the paths we want to pre-render based on posts
  const paths = data.map((item) => ({
    params: { id: item.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
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
