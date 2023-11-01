import { useEffect, useState } from "react";
import { TProductProps } from "../Product";
import { fetchData } from "../../helpers/FetchData";

const useFetch = () => {
  const [products, setProducts] = useState<TProductProps[]>([]);

  useEffect(() => {
    const fetchDataFromUrl = async () => {
      const data = await fetchData();
      setProducts(data);
    };
    fetchDataFromUrl();
  }, []);
  return { products };
};

export default useFetch;
