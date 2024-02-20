import "./App.css";
import { useMediaQuery } from "react-responsive";
import Container from "./components/Container";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import Layout from "./pages/Layout";
import Announce from "./pages/Announce";
import Free from "./pages/Free";
import Album from "./pages/Album";
import ErrorPage from "./pages/Error";
import PostDetailPage from "./pages/PostDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/main",
        element: <Main />,
      },
      {
        path: "/main/:id",
        element: <PostDetailPage />,
      },
      {
        path: "/announce",
        element: <Announce />,
      },
      {
        path: "/free",
        element: <Free />,
      },
      {
        path: "/album",
        element: <Album />,
      },
    ],
  },
  { path: "/login", element: <Container /> },
]);

function App() {
  const isPC = useMediaQuery({
    query: "(min-width : 768px) and (max-width:1920px)",
  });

  return <RouterProvider router={router} />;
}

export default App;
