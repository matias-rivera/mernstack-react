import Dexie from "dexie";

const db = new Dexie("ShoppingEcommerce");

db.version(1).stores({
  cart: "++id, price, title, category, image",
});

export default db;
