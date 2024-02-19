import "./App.css";
import { useMediaQuery } from "react-responsive";
import Container from "./components/Container";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import Layout from "./pages/Layout";
import Profile from "./pages/Profile";
import Announce from "./pages/Announce";
import Free from "./pages/Free";
import Album from "./pages/Album";

const router = createBrowserRouter([
  {
    path: "/main",
    element: <Layout />,
    children: [
      {
        path: "/main",
        element: <Main />,
      },
      {
        path: "/main/announce",
        element: <Announce />,
      },
      {
        path: "/main/free",
        element: <Free />,
      },
      {
        path: "/main/album",
        element: <Album />,
      },
    ],
  },
  { path: "/", element: <Container /> },
]);

function App() {
  const isPC = useMediaQuery({
    query: "(min-width : 768px) and (max-width:1920px)",
  });

  return <RouterProvider router={router} />;
}

export default App;
