import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const products = [
    { id: '1', category: 'MEDICAMENTOS', name: 'Paracetamol', price: '10.00' },
    { id: '2', category: 'MEDICAMENTOS', name: 'Aspirina', price: '8.00' },
    { id: '3', category: 'BELLEZA', name: 'Crema Hidratante', price: '15.00' },
    { id: '4', category: 'BELLEZA', name: 'Shampoo', price: '7.00' },

];

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const product = products.find(prod => prod.id === id);

    setTimeout(() => {
      setItem(product);
    }, 1000);
  }, [id]);

  return item ? (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          ${item.price}
        </Card.Text>
      </Card.Body>
    </Card>
  ) : (
    <div>Loading...</div>
  );
}

export default ItemDetailContainer;
