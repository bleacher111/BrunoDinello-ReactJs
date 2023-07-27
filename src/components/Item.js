import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Item({ item }) {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          ${item.price}
        </Card.Text>
        <Link to={`/item/${item.id}`}>
          <Button variant="primary">Ver detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;
