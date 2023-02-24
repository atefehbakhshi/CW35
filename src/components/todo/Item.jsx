import { Icon } from "@iconify/react";
import React from "react";

const Item = ({ todo }) => {
  let bgColor = "red";

  if (todo.status === "doing") {
    bgColor = "orange";
  }
  if (todo.status === "done") {
    bgColor = "green";
  }

  return (
    <div className="flex flex-col gap-3 p-3">
      <div className="flex justify-between items-center p-2 bg-slate-300 rounded">
        <p> Task: {todo.title}</p>
        <p>
          Status:
          <span
            className=" text-white rounded p-1"
            style={{ backgroundColor: bgColor }}
          >
            {todo.status}
          </span>
        </p>
        <div className="flex gap-3">
          <Icon
            icon="carbon:trash-can"
            color="white"
            width="24"
            className="bg-red-500 text-center rounded p-1"
          />
          <Icon
            icon="material-symbols:edit"
            color="white"
            width="24"
            className="bg-blue-500 text-center rounded p-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Item;
