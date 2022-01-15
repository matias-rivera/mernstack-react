import React from "react";
import data from "../examples/products.json";
import ProductList from "../components/Products/ProductList";

const Home = () => {
  return <ProductList products={data.products} />;
};

export default Home;
