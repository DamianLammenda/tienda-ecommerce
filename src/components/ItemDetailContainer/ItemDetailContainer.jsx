import React, { useState, useEffect } from "react";
// import DataJson from "../details.json";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {getFirestore,getDocs, collection,query, where} from "firebase/firestore";

const ItemDetailContainer = () => {
  const {id} = useParams();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchId = parseInt(id);
  useEffect(() => {

    const db = getFirestore();
    const carCollection = collection(db,"data");
    const filterCollection = query(
      carCollection,
      //Use el where, para filtrar los items por Id, teniendo en cuenta que habiamos usado el params para traer el ID en la variable searchId, creía que esa era la forma, pero no funciono.
      where("category.id","==",searchId));
      getDocs(filterCollection).then(
        (snapshot)=>{
          const data = snapshot.docs.map(
            (doc)=>({id: doc.id, ...doc.data()}))
            setDetails(data);
            console.log(data);
            setLoading(true); //le deje seteado el loading en "true"(como estaba antes), para que luego de cargar la data se vaya el spinner, pero no funciona, eso lo ves en "ItemDetails"
          }
          )

          //Lo de abajo es la promesa que usaba antes para traer los items cuando usaba el json local. Lo deje como referencia por si sirve.

    // let cargaData = new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(DataJson.filter((pItem) => pItem.id === searchId).shift());
    //   }, 2000);
    //   setLoading(false);
    // });
    // cargaData.then((res) => {
    //   setDetails(res);  
    //   setLoading(true)   
    // });
  }, []);

  return (
    <>
      <ItemDetail details={details} loading={loading}/>
    </>
  );
};

export default ItemDetailContainer;
