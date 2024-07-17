import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../components/Layout/Loader";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import styles from "../styles/styles";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/Route/ProductCard/ProductCard";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const { product, isLoading } = useSelector((state) => state.product);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (categoryData === null) {
      const d = product;
      setData(d);
    } else {
      const d = product && product.filter((i) => i.category === categoryData);
      setData(d);
    }
    //window.scrollTo(0, 0);
  }, [product]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={3} />
          <br />
          <br />
          <div className={`${styles.section}`}>
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
              {data &&
                data.map((i, index) => <ProductCard data={i} key={index} />)}
            </div>
            {data && data.length === 0 ? (
              <h1 className="text-center w-full pb-[100px] text-[20px]">
                Không có dữ liệu!
              </h1>
            ) : null}
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default ProductsPage;
