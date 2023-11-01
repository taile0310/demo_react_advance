import React, { FormEvent, useRef } from "react";

const FormInput: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;

    alert(`Name: ${name}\nEmail: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" ref={nameRef} />
      <br />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" ref={emailRef} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormInput;
