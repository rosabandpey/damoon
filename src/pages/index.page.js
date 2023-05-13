import HomePage from "./home/HomePage.page";

import { getLastProgramsService, getNewPrograms } from "@/services/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [newPrograms, setNewPrograms] = useState([]);

  const fetchNewProgramData = () => {
    getNewPrograms().then((res) => {
      setNewPrograms(res.data);
    });
  };

  

  useEffect(() => {
    fetchNewProgramData();
   
  }, []);

  return (
    <>
      <HomePage slideData={newPrograms}  />
    </>
  );
}
