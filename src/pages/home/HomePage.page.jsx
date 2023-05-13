


import Head from "next/head";
// import LastPrograms from "../../components/programs/lastPrograms";
import styles from './HomePage.module.scss'
// import { educationalContents, weblogContents } from "./constants";

import BlogSlider from "@/component/home/BlogSlider";
import Login from "../../component/home/Login";
import LastPrograms from "@/component/card/LastPrograms";
import { useEffect, useState } from "react";
import { getLastProgramsService } from "@/services/api";







export default function HomePage({slideData}) {


  const [lastUrbanPrograms, setLastUrbanPrograms] = useState([]);
  const [loading,isLoading]=useState(false)

  const getLastProgramData = () => {
    getLastProgramsService(2).then((res) => {
      console.log(res.data);
      setLastUrbanPrograms([res.data]);
      isLoading(true)
    });
  };

  useEffect(() => {
   
    getLastProgramData();
  }, []);

  return (
    <>
     
     <Head>
      <title> گروه دوچرخه‌سواری دامون | خانه</title>
    </Head>

      <div className={styles.flexRow}>
     
      <BlogSlider title="سفرهای پیش رو" slideData={slideData} />
     
{
  loading &&
  <LastPrograms lastPrograms={lastUrbanPrograms}  />
}
    
      </div>
      <Login />
{/* <div className={styles.row}>



      <LastPrograms programs={programs} title="برنامه های انجام شده"/>
    <LastPrograms programs={educationalContents} title="مطالب آموزشی"/>
    <LastPrograms programs={weblogContents} title="وبلاگ"/>
     </div> */}
    </>
  );
}


  


  
