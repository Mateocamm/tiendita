import db from "../lib/firebase";
export async function getAllProducts() {
  let data;

  await db
    .collection("products")
    .orderBy("category")
    .get()
    .then((doc) => {
      data = doc.docs.map((item) => ({
        id: item.id,
        name: item.data().name,
        price: item.data().price,
        picture: item.data().picture,
        slug: item.data().slug,
      }));
    });
  return data;
}
export async function getPathsProducts() {
  let data;

  await db
    .collection("products")
    .get()
    .then((doc) => {
      data = doc.docs.map((item) => ({
        slug: item.data().slug,
      }));
    });
  return data;
}

export async function getProductBySlug(slug) {
  let product;

  await db
    .collection("products")
    .where("slug", "==", slug)
    .get()
    .then((doc) => {
      if (doc.docs.length > 0) {
        product = {
          id: doc.docs[0].id,
          name: doc.docs[0].data().name,
          category: doc.docs[0].data().category,
          description: doc.docs[0].data().description ?? "",
          price: doc.docs[0].data().price,
          picture: doc.docs[0].data().picture,
        };
      }
    });

  return product;
}
