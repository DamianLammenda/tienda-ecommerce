import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const ItemData = [{
    "id": 1,
    "carMake": "Land Rover",
    "carModel": "Range Rover",
    "carYear": 2007,
    "carStock": 15,
    "carImg": "https://cars.usnews.com/static/images/Auto/izmo/293573/2008_land_rover_range_rover_angularfront.jpg"
  }, {
    "id": 2,
    "carMake": "Pontiac",
    "carModel": "Montana",
    "carYear": 2006,
    "carStock": 6,
    "carImg": "https://www.motortrend.com/uploads/sites/10/2015/11/2006-pontiac-montana-sv6-fwd-mini-van-angular-front.png?fit=around%7C875:492.1875"
  }, {
    "id": 3,
    "carMake": "Pontiac",
    "carModel": "Sunbird",
    "carYear": 1992,
    "carStock": 13,
    "carImg": "https://media.ed.edmunds-media.com/pontiac/sunbird/1994/oem/1994_pontiac_sunbird_sedan_le_fq_oem_1_500.jpg"
  }, {
    "id": 4,
    "carMake": "Jeep",
    "carModel": "Commander",
    "carYear": 2009,
    "carStock": 8,
    "carImg": "https://cars.usnews.com/static/images/Auto/izmo/302405/2009_jeep_commander_angularfront.jpg"
  }, {
    "id": 5,
    "carMake": "Mercedes-Benz",
    "carModel": "300SE",
    "carYear": 1992,
    "carStock": 14,
    "carImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQhGOC7TwUT_QM_nsjhETlfB22BAYAh6v4cQ&usqp=CAU"
  }, {
    "id": 6,
    "carMake": "Chevrolet",
    "carModel": "Malibu",
    "carYear": 2009,
    "carStock": 19,
    "carImg": "https://cars.usnews.com/static/images/Auto/izmo/300501/2009_chevrolet_malibu_angularfront.jpg"
  }, {
    "id": 7,
    "carMake": "Mercedes-Benz",
    "carModel": "SL-Class",
    "carYear": 2012,
    "carStock": 20,
    "carImg": "https://images.hgmsites.net/lrg/2012-mercedes-benz-sl-class-2-door-roadster-6-3l-amg-angular-front-exterior-view_100380545_l.jpg"
  }, {
    "id": 8,
    "carMake": "Hyundai",
    "carModel": "Accent",
    "carYear": 2013,
    "carStock": 2,
    "carImg": "https://s.aolcdn.com/dims-global/dims3/GLOB/resize/708x398/quality/60/https://s.aolcdn.com/commerce/autodata/images/USC30HYC011A122000.jpg"
  }, {
    "id": 9,
    "carMake": "Ford",
    "carModel": "Focus",
    "carYear": 2018,
    "carStock": 19,
    "carImg": "https://img.motoryracing.com/noticias/portada/24000/24870-n.jpg"
  }, {
    "id": 10,
    "carMake": "Peugeot",
    "carModel": "208",
    "carYear": 2021,
    "carStock": 15,
    "carImg": "https://1.bp.blogspot.com/-ax3iyaNjR4U/YDz6WdTS7XI/AAAAAAADdUU/yWsF-gl87DsIqWPAiV5xwvLsKpmpOvAFwCNcBGAsYHQ/s704/Lanzamiento-Peugeot-208-Active-Like-Pack-2021-Precios-0km-202100001.jpeg"
  }, 
  ]

  const [items, setItems] = useState([]);
  // console.log (items)
  useEffect (()=> {

      let promiseItem = new Promise ((resolve, reject)=> {
        setTimeout( () => {
            resolve(ItemData)
        }, 2000);
      })

      promiseItem.then((resp)=> {
        setItems (ItemData);
      }).catch ((error)=>console.error(error));
  },[])
  return (
    <>
    {/* <ItemCards /> */}
    <ItemList items={items}/>



    </>
  ) 
  
};

export default ItemListContainer;

