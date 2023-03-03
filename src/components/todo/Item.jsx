import { Icon } from "@iconify/react";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { showModal } from "../../store/slices/todo-slice";

const Item = ({ todo }) => {
  const dispatch = useDispatch();

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
          <button onClick={() => dispatch(showModal(todo.id))}>
            <Icon
              icon="carbon:trash-can"
              color="white"
              width="24"
              className="bg-red-500 text-center rounded p-1"
            />
          </button>
          <Link to={`edit/${todo.id}`}>
            <Icon
              icon="material-symbols:edit"
              color="white"
              width="24"
              className="bg-blue-500 text-center rounded p-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
