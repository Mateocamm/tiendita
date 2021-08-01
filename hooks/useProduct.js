import React, { useState, useEffect } from "react";
import db from "../lib/firebase";

export function useProduct(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("products")
      .orderBy("category")
      .get()
      .then((doc) => {
        const data = doc.docs.map((item) => ({
          id: item.id,
          name: item.data().name,
          price: item.data().price,
          picture: item.data().picture,
        }));

        setProducts(data);
      });
  }, []);

  return products;
}
