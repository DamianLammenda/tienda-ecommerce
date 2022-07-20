import React, { useState, useEffect } from "react";
import DataJson from "../details.json";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const {id} = useParams();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchId = parseInt(id);
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
