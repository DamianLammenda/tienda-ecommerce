import React, { useState, useEffect } from "react";
import DataJson from "../details.json";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchId = 9;
  useEffect(() => {
    let cargaData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(DataJson.filter((pItem) => pItem.id === searchId).shift());
      }, 2000);
      setLoading(false);
    });
    cargaData.then((res) => {
      setDetails(res);  
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
