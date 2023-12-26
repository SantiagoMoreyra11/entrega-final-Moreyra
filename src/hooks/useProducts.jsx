/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import {
  getDocs,
  getFirestore,
  collection,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import Category from "../pages/Category";

export const useAllProducts = (limit) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const collectionRef = collection(db, "products");
    getDocs(collectionRef)
      .then((res) => {
        const data = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
      })
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
};

export const useSingleProduct = (id) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, "products", id);

    getDoc(docRef)
      .then((res) => {
        const data = {
          id: res.id,
          ...res.data(),
        };
        setProduct(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { product, loading, error };
};

export const useAllProductsByCategory = (CategoryId) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const collectionRef = collection(db, "products");

    const categoryQuery = query(collectionRef, where("category", "==", CategoryId))

    getDocs(categoryQuery)
    .then((res) => {
      const data = res.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(data);
    })
    .catch((err) => setError(true))
    .finally(() => setLoading(false));

  }, []);

  return { products, loading, error };
};

