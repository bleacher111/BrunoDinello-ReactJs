import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import { db }  from '../config/firebase';
import { getDocs, collection } from "firebase/firestore";


function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect( () => {
    const findall = async () => {
      const itemsCollection = await getDocs(collection(db, "itemCollection"));
      setItems(itemsCollection.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      
    };
    findall();
  }, []);
console.log("Items", items);
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemListContainer;


// useEffect(() => {
//   const database = getFirestore();

//   const items1 = doc(database,"itemCollection","igdlsKgn2SAppUniwWZ2");
//   getDoc(items1).then((snapshot) => {
//     if snapshot.exists() {
//       const data = snapshot.data();
      
//       const artículos = {
//         id: snapshot.id,
//         CódigoArt : data.Código Artículo,
//       };