import {useEffect, useState} from 'react'


import {getFirestore,doc,where,query,getDocs} from "firebase/firestore"





const ItemDetailContainer =()=>{
  const [ productos , setProductos] = useState([]);
  const [ cargando , setCargando] = useState(false);
  
  useEffect(()=>{
 
    const db = getFirestore()
    const queryCollection = doc (db,'items' )
    
    const queryCollectionFilter = query(queryCollection, where('categoria','==', '2F8tzrktgM67P7m9khZX' ))
  
    getDocs(queryCollectionFilter)
    .then(resp=>setProductos( {id: resp.id, ...resp.data()}))
    .catch(err=>console.log(err))
    .finally(()=>setCargando(false))
  
  
  },[])
 
}
export default ItemDetailContainer