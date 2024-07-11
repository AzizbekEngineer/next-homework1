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

const ProductData = ({ limit, title, desc }) => {
  const { data, isLoading } = useGetProductsQuery({ limit });
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.value);
  const cart = useSelector((state) => state.cart.value);

  return (
    <div className="product">
      <div className="container">
        <h3 className="product__sec__title">{title}</h3>
        <p className="product__desc">{desc}</p>
        <div className="product__cards">
          {data?.products?.map((el) => (
            <div className="product__card" key={el.id}>
              <div className="product__img">
                <Image
                  width={200}
                  height={200}
                  src={el?.images[0]}
                  alt={el?.title}
                />

                <div className="product__slice">
                  <div className="product__btns">
                    <button onClick={() => dispatch(toggleHeart(el))}>
                      {wishlist?.some((item) => item.id === el.id) ? (
                        <FaHeart color="red" />
                      ) : (
                        <FaRegHeart color="red" />
                      )}
                    </button>
                    <button onClick={() => dispatch(add(el))}>
                      {cart?.some((item) => item.id === el.id) ? (
                        <FaShoppingCart color=" #56B280" />
                      ) : (
                        <IoCartOutline />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className="product__info">
                <Link href={`/product/${el.id}`}>
                  <h3 className="product__title">{el.title}</h3>
                </Link>

                <h4 className="product__price">{el.price}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductData;
