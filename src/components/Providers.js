"use client";
import { store } from "@/app/redux/store";
import React from "react";
import { Provider } from "react-redux";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <Header />
      {children}
      <Footer />
    </Provider>
  );
};

export default Providers;
