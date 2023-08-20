import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Usa require.context para importar automáticamente todas las imágenes de la carpeta images
const images = require.context('../images', false, /\.(png|jpe?g|svg)$/);

function getImagePath(imageName) {
  return images(`./${imageName}`);
}

function Item({ item }) {
  // Obtengo la imagen correspondiente en función del nombre de la imagen
  const imageSrc = getImagePath(item.image);

  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={imageSrc} alt={item.name} />
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
