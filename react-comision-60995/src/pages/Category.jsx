import React from "react";
import { useAllProductsByCategory } from "../hooks/useProducts";
import { ItemListContainer } from "../components";
import { useParams } from "react-router-dom";

const Category = () => {
  const { categoryId } = useParams();
  const { products } = useAllProductsByCategory(categoryId);


  return <ItemListContainer products={products} />;
};

export default Category;
