


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
import convertDate from '../../util/common'






export default function HomePage({slideData}) {


  const [lastUrbanPrograms, setLastUrbanPrograms] = useState([]);
  const [lastTripPrograms, setLastTripPrograms] = useState([]);
  const [loading,isLoading]=useState(false)

  const getLastProgramDataCity = () => {
    getLastProgramsService(1).then((res) => {
     
      setLastUrbanPrograms(res.data);
      isLoading(true)
    });
  };

  const getLastProgramDataTrip = () => {
    getLastProgramsService(2).then((res) => {
     
      setLastTripPrograms(res.data);
      isLoading(true)
    });
  };

  useEffect(() => {
   
    getLastProgramDataCity();
    getLastProgramDataTrip();
  }, []);



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

  <div className={styles.flexRow}>
 <LastPrograms lastPrograms={lastUrbanPrograms} isUrban={true} title='برنامه های شهری اجرا شده' linkTitle='مشاهده کامل برنامه های شهری'/>
  <LastPrograms lastPrograms={lastTripPrograms} isUrban={false} title='  سفرهای اجرا شده' linkTitle='مشاهده کامل سفرها' />
 </div>
 
}
      {/* <Login /> */}
{/* <div className={styles.row}>



      <LastPrograms programs={programs} title="برنامه های انجام شده"/>
    <LastPrograms programs={educationalContents} title="مطالب آموزشی"/>
    <LastPrograms programs={weblogContents} title="وبلاگ"/>
     </div> */}
    </>
  );
}


  


  
