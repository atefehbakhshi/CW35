import React from "react";
import { useDispatch } from "react-redux";
import { sendTodo } from "../../store/slices/todo-slice";

const Form = () => {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const { task, status, desc } = e.target;
    const newTodo = {
      title: task.value,
      status: status.value,
      description: desc.value,
    };

    dispatch(sendTodo(newTodo));
  };

  return (
    <div className="w-1/2 my-2 mx-auto ">
      <p className="bolder text-2xl my-2">New Task</p>
      <hr className="my-4" />
      <form onSubmit={submitHandler} className="flex flex-col gap-4">
        <input
          name="task"
          type="text"
          placeholder="Task Name"
          className="p-2 border  border-gray-300 rounded"
        />
        <select name="status" className="p-2 border  border-gray-300 rounded">
          <option value="todo">Todo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
        <textarea
          name="desc"
          className="p-2 border  border-gray-300 rounded "
          placeholder="Details(Optional)"
          rows={3}
        ></textarea>
        <hr className="my-4" />
        <button
          type="submit"
          className="bg-[#0e6ffd] text-white p-2 rounded w-2/3 mx-auto"
        >
          save
        </button>
      </form>
    </div>
  );
};

export default Form;
