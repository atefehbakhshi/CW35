import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodoService } from "../../api/services/get";
import { fetchTodos } from "../../store/slices/todo-slice";
import Item from "./Item";

const Todos = () => {
  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-1 p-3 w-4/5 mx-auto">
      {todoList.map((todo) => (
        <Item key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
