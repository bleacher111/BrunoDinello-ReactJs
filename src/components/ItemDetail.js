import React, { useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import ItemQuantitySelector from './ItemQuantitySelector';
import AddItemButton from './AddItemButton';
import '../css/ItemDetail.css'; // Asegúrate de que la ruta es correcta

const images = require.context('../images', false, /\.(png|jpe?g|svg)$/);

function getImagePath(imageName) {
  return images(`./${imageName}`);
}

function ItemDetail({ item }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  return (
    <Container className="item-detail">
      <Row>
        <Col md={6}>
          <img src={getImagePath(item.image)} alt={item.name} className="img-fluid item-image" />
        </Col>
        <Col md={6} className="d-flex align-items-center">
          <Card className="item-card w-100">
            <Card.Body>
              <Card.Title className="item-title">{item.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted item-category">{item.category}</Card.Subtitle>
              <Card.Text className="item-description">
                {item.description}
              </Card.Text>
              <div className="d-flex justify-content-between">
                <Card.Text className="item-price">
                  Precio: <span className="price-amount">${item.price}</span>
                </Card.Text>
                <Card.Text className="item-stock">
                  Cantidad en stock: <span className="stock-amount">{item.stock}</span>
                </Card.Text>
              </div>
              <ItemQuantitySelector
                maxQuantity={item.stock}
                onQuantityChange={handleQuantityChange}
              />
              <AddItemButton
                item={item}
                quantity={quantity}
                className="add-to-cart-button"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemDetail;
