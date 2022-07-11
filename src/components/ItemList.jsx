import React from "react";
import Item from "./Item";

const ItemList = (props) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Listado de Autos</h1>
      {props.items.map((cadaItem) => {
        return <Item datos={cadaItem} />;
      })}
    </>
  );
};

export default ItemList;
