import { Suspense, lazy } from "react";
import "./App.css";
import ListProduct from "./components/ListProduct";
import { delayForDemo } from "./helpers/DelayDemo";
import Input from "./components/common/Input";
import FormInput from "./components/FormInput";

const Content = lazy(() => delayForDemo(import("./components/Content")));

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Content />
        <ListProduct />
        <Input />
      </Suspense>
      <FormInput />
    </>
  );
}

export default App;
