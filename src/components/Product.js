import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Product = ({ prod }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${prod._id}`}>
        <Card.Img src={prod.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${prod._id}`}>
          <Card.Title as='div'>
            <strong>{prod.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='h3'>${prod.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
