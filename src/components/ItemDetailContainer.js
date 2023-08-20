import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../config/firebase';
import ItemDetail from './ItemDetail';
import { doc, getDoc, collection } from "firebase/firestore";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      const itemRef = doc(db, "itemCollection", id);
      const snapshot = await getDoc(itemRef);
      if (snapshot.exists()) {
        setItem({ id: snapshot.id, ...snapshot.data() });
      }
    };
    
    fetchItem();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <ItemDetail item={item} />
  );
}

export default ItemDetailContainer;
