import React from "react";
import { useDispatch } from "react-redux";

export const Card = ({ taskName, id }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(delete { taskName, id });
  };
  return (
    <div className="w-[200px] border rounded-xl p-[20px] bg-gray-100">
      <h2 className="text-[2rem] my-3">{taskName}</h2>
      <div className="flex gap-3">
        <button className="w-[70px] p-3 bg-yellow-300 text-white rounded-lg">
          Edit
        </button>
        <button
          onClick={deleteItem}
          className="w-[70px] p-3 bg-red-600 text-white rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
