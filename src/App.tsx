import "./App.css";
import { useMediaQuery } from "react-responsive";
import Container from "./components/login/Container";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import Layout from "./pages/Layout";
import Announce from "./pages/Announce";
import Free from "./pages/Free";
import Album from "./pages/Album";
import ErrorPage from "./pages/Error";
import PostDetailPage from "./pages/PostDetail";
import Join from "./pages/Join";
import LoginPage from "./pages/Login";

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
  { path: "/login", element: <LoginPage /> },
  { path: "/join", element: <Join /> },
]);

function App() {
  const isPC = useMediaQuery({
    query: "(min-width : 768px) and (max-width:1920px)",
  });

  return <RouterProvider router={router} />;
}

export default App;
