


import Head from "next/head";
// import LastPrograms from "../../components/programs/lastPrograms";
import styles from './HomePage.module.scss'
// import { educationalContents, weblogContents } from "./constants";

import BlogSlider from "@/component/home/BlogSlider";
import Login from "../../component/home/Login";
// import LastPrograms from "@/component/card/LastPrograms";
import { useEffect, useState } from "react";
import { getLastProgramsService } from "@/services/api";
import LastPrograms from "@/component/card/LastPrograms";







export default function HomePage({slideData}) {


  const [lastUrbanPrograms, setLastUrbanPrograms] = useState([]);
  const [loading,isLoading]=useState(false)

  const getLastProgramData = () => {
    getLastProgramsService(2).then((res) => {
     
      setLastUrbanPrograms(res.data);
      isLoading(true)
    });
  };

  useEffect(() => {
   
    getLastProgramData();
  }, []);

  console.log('tt',lastUrbanPrograms);

  return (
    <>
     
     <Head>
      <title> گروه دوچرخه‌سواری دامون | خانه</title>
    </Head>

      <div className={styles.flexRow}>
     
      <BlogSlider title="سفرهای پیش رو" slideData={slideData} />
     

    
      </div>

      {
  loading &&
  <LastPrograms lastPrograms={lastUrbanPrograms}  />
}
      <Login />
{/* <div className={styles.row}>



      <LastPrograms programs={programs} title="برنامه های انجام شده"/>
    <LastPrograms programs={educationalContents} title="مطالب آموزشی"/>
    <LastPrograms programs={weblogContents} title="وبلاگ"/>
     </div> */}
    </>
  );
}


  


  
