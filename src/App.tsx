import "./App.css";
import { useMediaQuery } from "react-responsive";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import Layout from "./pages/Layout";

import BulletinBorad from "./pages/BulletinBorad";
import ErrorPage from "./pages/Error";
import PostDetailPage from "./pages/PostDetail";
import Join from "./pages/Join";
import LoginPage from "./pages/Login";
import PostingPage from "./pages/Posting";
import MyPage from "./pages/MyPage";

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
        path: "/board",
        element: <BulletinBorad />,
      },
      {
        path: "/posting",
        element: <PostingPage />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
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
