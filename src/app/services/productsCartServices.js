import db from "../db/db";
import { useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";

export const useCart = () => {
  const [productsCart, setProductsCart] = useState([]);

  useLiveQuery(async () => {
    const productsDB = await db.cart.toArray();
    setProductsCart(productsDB);
  }, []);

  return productsCart;
};

export const getAllProducts = async () => {
  const allProductsFromDB = await db.cart.toArray();
  return allProductsFromDB;
};

export const addProductToCart = async (product) => {
  const { image, title, price, category } = product;

  const productFromDb = await db.cart.get({ title: title });
  // If products is already in the cart
  if (productFromDb == null) {
    await db.cart.add({
      title,
      price,
      category,
      image,
      items: 1,
    });
  } else {
    await db.cart.update(productFromDb.id, {
      items: productFromDb.items + 1,
    });
  }
};

export const removeProductFromCart = (product) => {
  db.cart.where("id").equals(product.id).delete();
};

export const addItem = async (product) => {
  await db.cart.update(product.id, {
    items: product.items + 1,
  });
};

export const removeItem = async (product) => {
  if (product.items > 1) {
    await db.cart.update(product.id, {
      items: product.items - 1,
    });
  } else {
    removeProductFromCart(product);
  }
};

export const getTotalPrice = (products) => {
  const total = products?.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.price * currentProduct.items;
  }, 0);
  return total;
};
