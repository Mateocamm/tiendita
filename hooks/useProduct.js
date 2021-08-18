import React, { useState, useEffect } from "react";
import db from "../lib/firebase";

export function useProduct(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    db.collection("products")
      .orderBy("category")
      .get()
      .then((doc) => {
        const data = doc.docs.map((item) => ({
          id: item.id,
          name: item.data().name,
          price: item.data().price,
          picture: item.data().picture,
          slug: item.data().slug,
        }));

        setLoading(false);
        setProducts(data);
      });
  }, []);

  return { loading, products };
}
