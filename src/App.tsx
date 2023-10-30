import { Suspense, lazy } from "react";
import "./App.css";
import ListProduct from "./components/ListProduct";
import { delayForDemo } from "./helpers/DelayDemo";

const Content = lazy(() => delayForDemo(import("./components/Content")));

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Content />
        <ListProduct />
      </Suspense>
    </>
  );
}

export default App;
