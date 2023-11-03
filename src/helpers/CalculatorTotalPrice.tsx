import { useMemo } from "react";
import { TProductProps } from "../components/Product";
import useFetch from "../components/hooks/useFetch";

const CalculatorTotalPrice = () => {
  const { data } = useFetch();
  const totalPrice = useMemo(() => {
    return data?.reduce((accumulator: number, item: TProductProps) => {
      return accumulator + (item.price || 0);
    }, 0);
  }, [data]);
  return <p>Sum: {totalPrice}</p>;
};

export default CalculatorTotalPrice;
