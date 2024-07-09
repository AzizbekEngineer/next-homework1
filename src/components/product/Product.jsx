import React from "react";
import { PRODUCT } from "@/static";
import Image from "next/image";
import "./product.scss";
import Link from "next/link";

const Product = ({ limit, title, desc }) => {
  return (
    <div className="product">
      <div className="container">
        <h3 className="product__sec__title">{title}</h3>
        <p className="product__desc">{desc}</p>
        <div className="product__cards">
          {PRODUCT?.slice(0, limit).map((el) => (
            <div className="product__card" key={el.id}>
              <div className="product__img">
                <Link href={`/product/${el.id}`}>
                  <Image src={el.img} />
                </Link>
              </div>
              <div className="product__info">
                <h3 className="product__title">{el.title}</h3>
                <h4 className="product__price">{el.price}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
