import React, { useState, useEffect } from "react";
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";
import {getFirestore, collection,getDocs} from "firebase/firestore";

const ItemListContainer = () => {
  // const { type } = useParams();
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const carCollection = collection(db,"data");
    getDocs(carCollection).then(
      (snapshot) => {
        const data = snapshot.docs.map(doc =>({
          id: doc.id, ...doc.data()
        }))
        setItems(data);
      }
    )
    },[]);

  return (
    <>
      <ItemList items={items} loaded={loading} />
    </>
  );
};

export default ItemListContainer;
