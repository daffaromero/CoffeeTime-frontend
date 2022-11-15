import React from "react";
import { Container } from "react-bootstrap";
import logo from "./logo.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>This is CoffeeTime</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
