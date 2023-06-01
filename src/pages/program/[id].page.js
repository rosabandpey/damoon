import NewProgramsDetail from "@/component/home/NewProgramsDetail";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getProgramsServiceById } from "@/services/api";

export default function ProgramId() {

const [data,setData]=useState([])
const [loading,isLoading]=useState(false)
const router=useRouter()
console.log('pathname',router.pathname)
console.log('query',router.query)

  useEffect(() => {

    getProgramsServiceById(router.query.id).then((res) => {
      console.log(res.data);
      setData(res.data)
      isLoading(true)
    });
    
  }, []);
  return (
    <>
    
    {
      loading && 
      <NewProgramsDetail data={data}/>
    }
   </>
   
  );
}
