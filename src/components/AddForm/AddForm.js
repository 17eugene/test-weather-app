import { useState } from "react";

import SubmitBtn from "../SubmitBtn/SubmitBtn";
import Input from "../Input/input";

import s from "./AddForm.module.css";

function AddForm({ submitForm }) {
  const [query, setQuery] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();

    submitForm(query.trim());
    setQuery("");
  };

  return (
    <form className={s.form} onSubmit={formSubmitHandler}>
      <Input
        className={s.input}
        inputChange={(e) => {
          setQuery(e.target.value);
        }}
        value={query}
        placeholder="Enter the city name..."
      ></Input>
      <SubmitBtn className={s.submitBtn}>Get city</SubmitBtn>
    </form>
  );
}

export default AddForm;
