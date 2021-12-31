import React from "react";
import Container from "./components/Container";
import ProductList from "./components/Products/ProductList";
import data from "./examples/products.json";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <ProductList products={data.products} />
      </Container>
    </>
  );
};

export default App;
