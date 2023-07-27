import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';

const products = [
  { id: '1', category: 'medicamentos', name: 'Paracetamol', price: '10.00' },
  { id: '2', category: 'medicamentos', name: 'Aspirina', price: '8.00' },
  { id: '3', category: 'belleza', name: 'Crema Hidratante', price: '15.00' },
  { id: '4', category: 'belleza', name: 'Shampoo', price: '7.00' },

];

function ItemListContainer() {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    let filteredProducts;

    if (id) {
      filteredProducts = products.filter(product => product.category === id);
    } else {
      filteredProducts = products; // Si no hay id, mostrar todos los productos.
    }

    setTimeout(() => {
      setItems(filteredProducts);
    }, 1000);
  }, [id]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemListContainer;

