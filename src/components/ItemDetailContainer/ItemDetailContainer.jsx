import React, { useState, useEffect } from "react";
import DataJson from "../details.json";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cargaData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(DataJson);
      }, 2000);
      setLoading(false);
    });
    cargaData.then(() => {
      setDetails(DataJson);  
      setLoading(true)   
    });
  }, []);

  return (
    <>
      <ItemDetail details={details} loading={loading}/>
    </>
  );
};

export default ItemDetailContainer;
