import React from "react";
import Item from "../item/Item";

const ItemList = (props, loading = false) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Listado de Autos</h1>
      {props.items.map((cadaItem) => {
        return <Item datos={cadaItem} loading={true} key={cadaItem.id} />;
      })}
    </>
  );
};

export default ItemList;
