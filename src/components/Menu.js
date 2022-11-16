import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Menu = ({ menuData }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${menuData.data._id}`}>
        <Card.Img src={menuData.data.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/product/${menuData.data._id}`}>
          <Card.Title as='div'>
            <strong>{menuData.data.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='h3'>${menuData.data.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Menu;
