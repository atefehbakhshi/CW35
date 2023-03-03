import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Modal from "./modal";
import Add from "./screens/Add";
import Edit from "./screens/Edit";
import Error from "./screens/Error";
import Home from "./screens/Home";
import RootLayout from "./screens/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "add", element: <Add /> },
      { path: "edit/:todoId", element: <Edit /> },
    ],
  },
]);

function App() {
  const { showModal } = useSelector((state) => state.todos);
  return (
    <>
      {showModal && <Modal />}

      <RouterProvider router={router} />
    </>
  );
}

export default App;
