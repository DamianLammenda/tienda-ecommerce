import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {getFirestore,getDoc, doc} from "firebase/firestore";

const ItemDetailContainer = () => {
  const {id} = useParams();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchId = parseInt(id);
  useEffect(() => {

    const db = getFirestore();
    const docRef = doc(db, "data",id);
    getDoc(docRef).then(
      snapshot =>{
        setDetails ({id: snapshot.id, ...snapshot.data()});
      })
    setLoading(true);
    
  }, [searchId]);

  return (
    <>
      <ItemDetail details={details} loading={loading}/>
    </>
  );
};

export default ItemDetailContainer;
