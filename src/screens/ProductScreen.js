import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";

const URI = "http://127.0.0.1:5500/";
const ProductScreen = ({ props }) => {
  const { id } = useParams();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const { data } = await axios.get(
        `http://127.0.0.1:5500/api/v1/menu/${id}`
      );
      console.log("Axios returned: ", data.data);
      setMenu(data.data);
      console.log("State after setMenu: ", menu);
    };
    fetchMenu();
  }, []);
  console.log("State before render: ", menu);
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row menu={menu._id}>
        <Col md={6}>
          <Image src={menu.image} alt={menu.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{menu.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>Price: Rp{menu.price}</ListGroup.Item>
            <ListGroup.Item>Description: {menu.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>Rp{menu.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {menu.available === true ? "Ready to order" : "Sold out"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={menu.available === false}
                >
                  Add to cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
