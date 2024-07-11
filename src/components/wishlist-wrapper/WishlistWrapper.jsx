"use client";
import { toggleHeart } from "@/app/lib/features/wishlist/wishlistSlice";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../product/product.scss";

const WishlistWrapper = () => {
  const wishlist = useSelector((state) => state.wishlist.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="product">
        <div className="product__cards">
          {wishlist.map((el) => (
            <div className="product__card" key={el.id}>
              <div className="product__img">
                <Image
                  width={200}
                  height={200}
                  alt={el?.title}
                  src={el?.images[0]}
                />
                {/* <Link href={`/product/${el.id}`}>
                </Link> */}
                <div className="product__slice">
                  <div className="product__btns">
                    <button onClick={() => dispatch(toggleHeart(el))}>
                      {wishlist?.some((item) => item.id === el.id) ? (
                        <FaHeart color="red" />
                      ) : (
                        <FaRegHeart color="red" />
                      )}
                    </button>
                    <button>
                      <IoCartOutline />
                    </button>
                  </div>
                </div>
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

export default WishlistWrapper;
