import HomePage from "./home/HomePage.page";
import {
  sample,
  introSectionData,
  relatedSiteData,
  lastPrograms,
} from "../pages/home/constants";
import { useEffect, useState } from "react";
import { getNewPrograms } from "@/services/api";

export default function Home({
  sliderData,
  introSectionData,
  relatedSiteData,
  programs,
}) {
  return (
    <>
      <HomePage
        slideData={sliderData}
        introSectionData={introSectionData}
        relatedSiteData={relatedSiteData}
        programs={lastPrograms}
      />
    </>
  );
}

export const getStaticProps = async () => {
  // const [newPrograms, setNewPrograms] = useState([]);


 
    let res = await getNewPrograms();
    console.log(res)
    
    const sliderData=res.data
    // setNewPrograms({ data });





  return {
    props: {
      programs: lastPrograms,
      sliderData,
      introSectionData: introSectionData,
      relatedSiteData: relatedSiteData,
    },
  };
};

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch("https://.../posts");
//   const posts = await res.json();

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   };
// }
