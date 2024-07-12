"use client";
import React from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import "./product.scss";
import Link from "next/link";
import { useGetProductsQuery } from "@/app/lib/api/productApi";
import { useDispatch, useSelector } from "react-redux";
import { toggleHeart } from "@/app/lib/features/wishlist/wishlistSlice";
import { add } from "@/app/lib/features/cart/cartSlice";
import ProductItem from "../productItem/ProductItem";

const ProductData = ({ limit, title, desc }) => {
  const { data, isLoading } = useGetProductsQuery({ limit });
  const wishlist = useSelector((state) => state.wishlist.value);
  const cart = useSelector((state) => state.cart.value);

  return (
    <div className="product">
      <div className="container">
        <h3 className="product__sec__title">{title}</h3>
        <p className="product__desc">{desc}</p>
        <div className="product__cards">
          {data?.products?.map((el) => (
            <ProductItem el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductData;
