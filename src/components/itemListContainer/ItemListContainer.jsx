import React, { useState, useEffect } from "react";
import ItemList from "../itemList/ItemList";
import DataJson from "../data.json";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const id = useParams()
  console.log (id)
  const {type} = useParams();
    
  console.log(type)
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let cargaData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(DataJson.filter((products) => products.category.type === id));
      }, 2000);
      setLoading(false);
    });

    cargaData
      .then(() => {
        setItems(DataJson);
        setLoading(true);
      })
      .catch((error) => console.error(error));
  }, [id]);
  return (
    <>
      {/* <ItemCards /> */}
      <ItemList items={items} loaded={loading} />
    </>
  );
};

export default ItemListContainer;
