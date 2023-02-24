import React from "react";

const Form = () => {
  return (
    <div className="w-1/2 my-2 mx-auto ">
      <p className="bolder text-2xl my-2">New Task</p>
      <hr className="my-4" />
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Task Name"
          className="p-2 border  border-gray-300 rounded"
        />
        <select className="p-2 border  border-gray-300 rounded">
          <option value="todo">Todo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
        <textarea
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
