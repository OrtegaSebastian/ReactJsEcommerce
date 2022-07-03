import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

import {getFirestore,  collection, getDocs } from "firebase/firestore"


const ItemListContainer = () => {


  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(false);
 

  useEffect(()=>{

    const db = getFirestore()
    const queryCollection = collection(db,'items')
    getDocs(queryCollection)
    .then(resp=>setProductos( resp.docs.map( item=>({id: item.id, ...item.data()}))))
    .catch(err=>console.log(err))
    .finally(()=>setCargando(false))



  })
  console.log(productos)
  return (
    <div>
      {!cargando ? <p>...Cargando</p> : <ItemList productos={productos} />}
      
    </div>
  );
};

export default ItemListContainer;
