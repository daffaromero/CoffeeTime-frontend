import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listMenus } from "../actions/menuActions";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

// const URI = "http://127.0.0.1:5500/";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const menusList = useSelector((state) => state.productList);
  const { loading, error, menus } = menusList;
  // const [menus, setMenus] = useState([]);
  useEffect(() => {
    dispatch(listMenus());
    // const fetchMenus = async () => {
    //   const { data } = await axios.get("http://127.0.0.1:5500/api/v1/menu");
    //   setMenus(data.data);
    // };
    // fetchMenus();
  }, [dispatch]);

  return (
    <>
      <h1>Menu</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {menus.map((prod) => (
            <Col key={prod._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={prod} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};
export default HomeScreen;
