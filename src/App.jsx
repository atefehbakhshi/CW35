import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
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
  return <RouterProvider router={router} />;
}

export default App;
