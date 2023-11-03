import { Profiler, Suspense, lazy } from "react";
import "./App.css";
import ListProduct from "./components/ListProduct";
import { delayForDemo } from "./helpers/DelayDemo";
import Input from "./components/common/Input";
import FormInput from "./components/FormInput";
import CalculatorTotalPrice from "./helpers/CalculatorTotalPrice";

const Content = lazy(() => delayForDemo(import("./components/Content")));

function App() {
  const onRender = (
    id: string,
    phase: string,
    actualTime: number,
    baseTime: number,
    startTime: number,
    commitTime: number
  ) => {
    console.log(`${id}'s ${phase} phase:`);
    console.log(`Actual time: ${actualTime}`);
    console.log(`Base time: ${baseTime}`);
    console.log(`Start time: ${startTime}`);
    console.log(`Commit time: ${commitTime}`);
  };

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Profiler id="Content" onRender={onRender}>
          <Content />
        </Profiler>
        <Profiler id="ListProduct" onRender={onRender}>
          {/* <ListProduct /> */}
        </Profiler>
        <Input />
      </Suspense>
      <FormInput />
      <CalculatorTotalPrice />
    </>
  );
}

export default App;
