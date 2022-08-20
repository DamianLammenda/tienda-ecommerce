import React from "react";
import Item from "../item/Item";
import { Spinner } from "react-bootstrap";
import logo from "../imgs/logo.png";


const ItemList = (props, loading=false) => {
  return loading ? (
    <>
      <div className="d-flex justify-content-center m-4">
      <img style={{width:180}} src={logo} alt="logo" />
      </div>
      
      <div className="row row-cols-1 row-cols-sm-4 d-flex justify-content-center" >
      
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
