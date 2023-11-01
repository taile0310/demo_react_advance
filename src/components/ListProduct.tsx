import { Suspense, lazy } from "react";
import { delayForDemo } from "../helpers/DelayDemo";
import useFetch from "./hooks/useFetch";

const Product = lazy(() => delayForDemo(import("./Product")));

const ListProduct = () => {
  const { products } = useFetch();
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
