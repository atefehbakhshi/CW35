import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, hideModal } from "../../store/slices/todo-slice";

const DeleteModal = () => {
  const dispatch = useDispatch();
  const { selectedTodoId } = useSelector((state) => state.todos);

  const deleteHandler = () => {
    dispatch(deleteTodo(selectedTodoId));
    dispatch(hideModal());
  };

  const cancelHandler = () => {
    dispatch(hideModal());
  };

  return (
    <div className=" flex justify-center h-[100%] bg-[#0000006e] w-full absolute">
      <div className="text-center bg-white px-4 py-8 rounded-lg w-2/3 h-[10rem]">
        <p className="mb-4">Delete Todo?</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={deleteHandler}
            className="bg-[#707589] text-[#d1d1d1] w-[4rem] rounded-lg px-2 py-1"
          >
            Yes
          </button>
          <button
            onClick={cancelHandler}
            className="bg-[#0f1631] text-white w-[4rem] rounded-lg px-2 py-1"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
