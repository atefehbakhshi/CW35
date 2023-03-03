import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Modal from "./modal";
import Add from "./screens/Add";
import Home from "./screens/Home";
import RootLayout from "./screens/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "add", element: <Add /> },
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
