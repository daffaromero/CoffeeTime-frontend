import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Menu from "../components/Menu";

const HomeScreen = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    const fetchMenus = async () => {
      const res = await axios.get("/api/v1/menu");

      setMenus(res);
      {
        console.log(res.data);
        let stringData = JSON.stringify(res.data);
        let menuData = JSON.parse(stringData);
        console.log(menuData.data[0].name);
      }
    };
    fetchMenus();
  }, []);
  return (
    <>
      <h1>Menu</h1>
      <Row>
        {Object.keys(menus).map((key) => {
          <Col sm={12} md={6} lg={4} xl={3}>
            <Menu menu={menus} />
          </Col>;
        })}
      </Row>
    </>
  );
};

export default HomeScreen;
