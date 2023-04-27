import HomePage from './home/HomePage.page'
import {sample,introSectionData,relatedSiteData,lastPrograms} from '../pages/home/constants'


export default function Home({slideData,introSectionData,relatedSiteData,programs}) {
  return (
    <>
   
    <HomePage  slideData={slideData}  introSectionData={introSectionData} relatedSiteData={relatedSiteData} programs={lastPrograms} />

    </>
  )
}


export const getStaticProps = async () => {
  return {
    props: {
      programs:lastPrograms,
      slideData: sample,
      introSectionData:introSectionData,
      relatedSiteData:relatedSiteData,
    },
    
  }
}
