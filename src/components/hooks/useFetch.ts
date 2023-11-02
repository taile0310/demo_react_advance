import { useCallback, useEffect, useReducer } from "react";
import { TProductProps } from "../Product";
import { fetchData } from "../../helpers/FetchData";

type TState = {
  data?: TProductProps[];
  isLoading: boolean;
  error?: string;
};

type TAction =
  | { type: "request" }
  | { type: "success"; results: TProductProps[] }
  | { type: "failure"; error: string };

const reducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case "request":
      return { ...state, isLoading: true };
    case "success":
      return { ...state, isLoading: false, data: action.results };
    case "failure":
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

const useFetch = () => {
  const [{ data, isLoading, error }, dispatch] = useReducer(reducer, {
    isLoading: false,
    data: undefined,
    error: undefined,
  });

  const fetchDataFromUrl = useCallback(async () => {
    try {
      dispatch({ type: "request" });
      const data = await fetchData();
      dispatch({ type: "success", results: data });
    } catch (error) {
      dispatch({ type: "failure", error: "Connection error" });
    }
  }, []);

  useEffect(() => {
    fetchDataFromUrl();
  }, [fetchDataFromUrl]);

  return { data, isLoading, error };
};

export default useFetch;
