import React from 'react';
import Card from 'react-bootstrap/Card';

function ItemDetail({ item }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{item.category}</Card.Subtitle>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Card.Text>
          Precio: ${item.price}
        </Card.Text>
        <Card.Text>
          Cantidad en stock: {item.quantity}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;
