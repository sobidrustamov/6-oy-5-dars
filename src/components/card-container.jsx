import React from "react";
import { useSelector } from "react-redux";
import { Form } from "./form/form";
import { Card } from "./card/card";
import { nanoid } from "@reduxjs/toolkit";

export const CardContainer = () => {
  const { task } = useSelector((store) => store.todo);
  return (
    <div className="my-5">
      <Form />
      <div className="flex gap-5">
        {task.map((item) => {
          return <Card key={nanoid()} {...item} />;
        })}
      </div>
    </div>
  );
};
