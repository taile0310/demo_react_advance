import { memo, useState } from "react";

type TProps = {
  name: string;
};

const ExampleMemo = memo(function Greeting({ name }: TProps) {
  console.log("Greeting was rendered at", new Date().toLocaleTimeString());
  return (
    <h3>
      Hello{name && ", "}
      {name}!
    </h3>
  );
});

const Input = () => {
  const [name, setName] = useState("");
  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <ExampleMemo name={name} />
    </>
  );
};

export default Input;
