import { Suspense, lazy } from "react";
import { delayForDemo } from "../helpers/DelayDemo";
import useFetch from "./hooks/useFetch.ts";

const Product = lazy(() => delayForDemo(import("./Product")));

const ListProduct = () => {
  const { data, isLoading, error } = useFetch();

  return (
    <>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {data && (
        <ul className="list-product">
          {data.map((product) => {
            const { id, name } = product;
            return (
              <Suspense fallback={<p>Loading...</p>} key={id}>
                <Product id={id} name={name} />
              </Suspense>
            );
          })}
        </ul>
      )}
    </>
  );
};
export default ListProduct;
