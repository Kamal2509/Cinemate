import { useEffect, useState } from "react";
import { Card } from "../components";

export const MovieList = () => {
  const [movies,setMovies]=useState();
  useEffect(()=>{
async function fetchMovies(){
  const response=await fetch();
const data =await response.json();
setMovies(data.results);
}
  },[])
  return (
    <main >
      <section className="max-w-7xl mx-auto py-7 ">
        <div className="flex justify-start flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  )
}
