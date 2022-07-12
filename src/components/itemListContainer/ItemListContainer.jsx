import React, { useState, useEffect } from "react";
import ItemList from "../itemList/ItemList";
import DataJson from "../data.json";
const ItemListContainer = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let cargaData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(DataJson);
      }, 2000);
      setLoading(false);
    });

    cargaData
      .then(() => {
        setItems(DataJson);
        setLoading(true);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      {/* <ItemCards /> */}
      <ItemList items={items} loaded={loading} />
    </>
  );
};

export default ItemListContainer;
