import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/layout/Layout";
import ErrorPage from "./pages/Error/ErrorPage";
import Wishlists from "./pages/Wishlist/Wishlists";
import LoginForm from "./pages/Login/LoginForm";
import Movie from "./pages/Movie/Movie";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
          errorElement: <ErrorPage />,
        },
        {
          path: "movie/:movieId",
          element: <Movie />,
          errorElement: <ErrorPage />,
        },
        {
          path: "wishlists",
          element: <Wishlists />,
          errorElement: <ErrorPage />,
        },
        {
          path: "login",
          element: <LoginForm />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
