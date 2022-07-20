import React, { useState, useEffect } from "react";
import ItemList from "../itemList/ItemList";
import DataJson from "../data.json";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { type } = useParams();
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let cargaData = new Promise((resolve) => {
      setTimeout(() => {
        if (type) {
          resolve(
            DataJson.filter((products) => products.category.type === type)
          );
        } else {
          resolve(DataJson);
        }
      }, 2000);
      setLoading(false);
    });
    cargaData
      .then((res) => {
        setItems(res);
        setLoading(true);
      })
      .catch((error) => console.error(error));
  }, [type]);
  return (
    <>
      {/* <ItemCards /> */}
      <ItemList items={items} loaded={loading} />
    </>
  );
};

export default ItemListContainer;
