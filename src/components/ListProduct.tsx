import { Suspense, lazy, useEffect, useState } from "react";
import { TProductProps } from "./Product";
import { fetchData } from "../helpers/FetchData";
import { delayForDemo } from "../helpers/DelayDemo";

const Product = lazy(() => delayForDemo(import("./Product")));

const ListProduct = () => {
  const [products, setProducts] = useState<TProductProps[]>([]);
  useEffect(() => {
    const fetchDataFromUrl = async () => {
      const data = await fetchData();
      setProducts(data);
    };
    fetchDataFromUrl();
  }, []);
  return (
    <>
      <ul className="list-product">
        {products.map((product) => {
          const { id, name } = product;
          return (
            <Suspense fallback={<p>Loading...</p>}>
              <Product id={id} name={name} />
            </Suspense>
          );
        })}
      </ul>
    </>
  );
};

export default ListProduct;
