import React, { Fragment } from "react";
import { useFetchGifs } from "../Hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  

    const {data:images, loading} = useFetchGifs(category);



  return (
    <Fragment>
    <h3 className = "animate__animated animate__fadeInLeft">{category}</h3>

    {loading && <p>Cargando...</p> }

    <div className="cardGrid">
      
      
          {
              images.map ( (img) => (
                <GifGridItem
                key = {img.id}
                {...img}/>
              ))
          }
      
    </div>
    </Fragment>
  );
};
