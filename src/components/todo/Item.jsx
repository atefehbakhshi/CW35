import { Icon } from "@iconify/react";
import React from "react";

const Item = () => {
  return (
    <div className="flex flex-col gap-3 p-3">
      <div className="flex justify-between items-center p-2 bg-slate-300 rounded">
        <p> Task: test to do</p>
        <p>
          Status:
          <span className="bg-red-500 text-white rounded p-1">done</span>
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
