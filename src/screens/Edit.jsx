import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editTodo, fetchEachTodos } from "../store/slices/todo-slice";

const Edit = () => {
  const dispatch = useDispatch();
  const { todoId } = useParams();
  console.log(todoId);

  const { editedTodo } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchEachTodos(todoId));
  }, [dispatch]);

  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    setTitle(editedTodo.title);
    setStatus(editedTodo.status);
    setDesc(editedTodo.description);
  }, [editedTodo]);

  const submitHandler = (e) => {
    e.preventDefault();
    const editedTodo = {
      id: todoId,
      title,
      status,
      description: desc,
    };

    dispatch(editTodo(editedTodo));
  };

  return (
    <div className="w-1/2 my-2 mx-auto ">
      <form onSubmit={submitHandler} className="flex flex-col gap-4">
        <input
          name="task"
          type="text"
          placeholder="Task Name"
          className="p-2 border  border-gray-300 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          name="status"
          className="p-2 border  border-gray-300 rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="todo">Todo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
        <textarea
          name="desc"
          className="p-2 border  border-gray-300 rounded "
          placeholder="Details(Optional)"
          rows={3}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <hr className="my-4" />
        <button
          type="submit"
          className="bg-[#0e6ffd] text-white p-2 rounded w-2/3 mx-auto"
        >
          Edit
        </button>
      </form>
    </div>
  );
};

export default Edit;
