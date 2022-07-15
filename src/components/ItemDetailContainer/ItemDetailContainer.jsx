import React, { useState, useEffect } from "react";
import DataJson from "../details.json";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    let cargaData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(DataJson);
      }, 2000);
    });
    cargaData.then(() => {
      setDetails(DataJson);      
    });
  }, []);

  return (
    <>
      <ItemDetail details={details} />
    </>
  );
};

export default ItemDetailContainer;
