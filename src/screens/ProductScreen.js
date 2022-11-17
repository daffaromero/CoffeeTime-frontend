import React, { useState, useRef, useEffect } from "react";
import { Form, Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from "react-bootstrap";
import { listMenus, listMenuDetails } from "../actions/menuActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

const URI = "https://coffeetime-backend.vercel.app";
const ProductScreen = ({ history, props }) => {
  const [qty, setQty] = useState(0)

  const dispatch = useDispatch();
  const menusDetails = useSelector((state) => state.productDetails);
  const { loading, error, menu } = menusDetails;
  const { id } = useParams();
  // const [menu, setMenu] = useState([]);

  useEffect(() => {
    dispatch(listMenuDetails(id));
    // const fetchMenu = async () => {
    //   const { data } = await axios.get(URI + `api/v1/menu/${id}`);
    //   setMenu(data.data);
    // };
    // fetchMenu();
  }, [dispatch, props]);

  const addToCartHandler = () => {
    history.push(`/cart/${id}?qty=${qty}`)
  }

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
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

                {menu.available === true && (
                  <ListGroupItem>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        {/* <Form.Control 
                          as='select' 
                          value={qty} 
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {
                            [...Array(menu.available).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))                          
                          }

                        </Form.Control> */}
                      </Col>
                    </Row>
                  </ListGroupItem>
                ) }

                <ListGroup.Item>
                  <Button
                    onClick={addToCartHandler}
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
      )}
    </>
  );
};

export default ProductScreen;
