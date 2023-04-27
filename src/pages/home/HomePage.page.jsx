


import Head from "next/head";
// import LastPrograms from "../../components/programs/lastPrograms";
import styles from './HomePage.module.scss'
// import { educationalContents, weblogContents } from "./constants";

import BlogSlider from "@/component/home/BlogSlider";
import Login from "../../component/home/Login";






export default function HomePage({slideData,programs}) {


  return (
    <>
     
     <Head>
      <title> گروه دوچرخه‌سواری دامون | خانه</title>
    </Head>

      <div className={styles.flexRow}>
     
      <BlogSlider title="سفرهای پیش رو" slideData={slideData} />
     
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


  


  
