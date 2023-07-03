import React from "react";
import "./Main.css";
import { PRODUCTS } from "../../products/products";
import ProductCard from "../productCard/ProductCard";
import Footer from "../footer/Footer";

const Main = () => {
  return (
    <>
      <div className="main_sec">
        <div inner-main>
          <div className="products_sec">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
