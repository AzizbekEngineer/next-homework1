import { getData } from "@/api/fetchData";
import Detail from "@/components/single/Detail";
import React from "react";

const ProductDetail = async ({ params }) => {
  let { id } = params;
  let detailData = await getData(`/product/${id}`);

  return (
    <div>
      <Detail data={detailData} />
    </div>
  );
};

export default ProductDetail;
