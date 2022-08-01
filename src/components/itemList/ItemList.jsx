import React from "react";
import Item from "../item/Item";
import { Spinner } from "react-bootstrap";


const ItemList = (props, loading=false) => {
  return loading ? (
    <>
      <h1 style={{ textAlign: "center" }}>Listado de Autos</h1>
      
      <div class="row row-cols-1 row-cols-sm-4 d-flex justify-content-center" >
      
      {props.items.map((cadaItem) => {
        return <Item datos={cadaItem} loading={true} key={cadaItem.id} />;
      })}
      
    </div>
      
    </>
    ) : (
      <>
        <Spinner animation="grow" variant="dark" />
      </>
    );

  
};

export default ItemList;
