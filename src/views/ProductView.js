import React, { useEffect, useState } from "react";
import ProductDetails from "../components/Products/ProductDetails";
import data from "../examples/products.json";

const ProductView = ({ match }) => {
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    getProduct();
  }, [match]);

  const getProduct = () => {
    const { id } = match.params;
    const product = data.products.find((item) => item.id == id);
    setProductDetail(product);
  };

  return <ProductDetails product={productDetail} />;
};

export default ProductView;
