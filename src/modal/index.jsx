import ReactDOM from "react-dom";
import DeleteModal from "../components/modal";

const Modal = () => {
  return (
    <div>
      {ReactDOM.createPortal(
        <DeleteModal />,
        document.getElementById("modal-root")
      )}
    </div>
  );
};

export default Modal;
