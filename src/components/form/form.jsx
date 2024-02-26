import React from "react";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { add } from "../../redux/reducer/todo";
import { useDispatch } from "react-redux";

export const Form = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const submit = (e) => {
    e.preventDefault();
    dispatch(add({ taskName: input, id: nanoid() }));
    setInput("");
  };
  return (
    <form
      onSubmit={submit}
      className="flex gap-3 justify-center text-center my-5"
    >
      <input
        className="border p-3 rounded-lg"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type="text"
        placeholder="Todo..."
      />
      <button className="p-3 bg-blue-600 text-white rounded-lg" type="submit">
        Save
      </button>
    </form>
  );
};
