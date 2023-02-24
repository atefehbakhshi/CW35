import React from "react";
import Item from "./Item";

const Todos = () => {
  return (
    <div className="flex flex-col gap-1 p-3 w-4/5 mx-auto">
      <Item />
      <Item />
    </div>
  );
};

export default Todos;
