import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Product from "../components/Product";

import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const URI = "http://127.0.0.1:5500/";
const HomeScreen = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    const fetchMenus = async () => {
      const { data } = await axios.get("http://127.0.0.1:5500/api/v1/menu");
      for (var i = 0; i < data.data.length; i++) {
        console.log("Axios returned: ", data.data);
      }

      setMenus(data.data);
      console.log("State after setMenus: ", menus);
    };
    fetchMenus();
  }, []);
  console.log("State before render: ", menus);
  return (
    <>
      <h1>Menu</h1>
      <Row>
        {menus.map((prod) => (
          <Col key={prod._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={prod} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default HomeScreen;
