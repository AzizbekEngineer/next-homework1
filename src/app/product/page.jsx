import { getData } from "@/api/fetchData";
import ProductData from "@/components/product/ProductData";
import React from "react";

const Product = async ({ title, desc, limit }) => {
  const data = await getData("/products");
  return (
    <div>
      <ProductData data={data} title={title} desc={desc} limit={limit} />
    </div>
  );
};

export default Product;
