import { Suspense, lazy } from "react";
import "./App.css";
import ListProduct from "./components/ListProduct";
import { delayForDemo } from "./helpers/DelayDemo";
import Input from "./components/common/Input";

const Content = lazy(() => delayForDemo(import("./components/Content")));

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Content />
        <ListProduct />
        <Input />
      </Suspense>
    </>
  );
}

export default App;
