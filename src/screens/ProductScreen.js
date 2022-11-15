import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import products from "../products";

const ProductScreen = ({ props }) => {
  let { id } = useParams();
  const product = products.find((p) => p._id === parseInt(id));
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
    </>
  );
};

export default ProductScreen;
