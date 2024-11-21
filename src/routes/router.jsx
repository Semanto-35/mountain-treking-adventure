import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UpdateProfile from "../pages/UpdateProfile";
import MyProfile from "../pages/MyProfile";
import AdventureCards from "../components/AdventureCards";
import AdventureDetails from "../pages/AdventureDetails";
import PrivateRoutes from "./PrivateRoutes";
import ForgetPassword from "../pages/ForgetPassword";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        children: [
          {
            path: '/',
            element: <AdventureCards></AdventureCards>,
            loader: () => fetch('/adventure.json')
          }
        ]
      },
      {
        path: '/details/:detailsId',
        element: <PrivateRoutes>
          <AdventureDetails></AdventureDetails>
        </PrivateRoutes>,
        loader: () => fetch('/adventure.json')
      },
      {
        path: '/profile',
        element: <PrivateRoutes>
          <MyProfile></MyProfile>
        </PrivateRoutes>
      },
      {
        path: '/updateProfile',
        element: <PrivateRoutes>
          <UpdateProfile></UpdateProfile>
        </PrivateRoutes>
      },
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/forgetPassword',
    element: <ForgetPassword></ForgetPassword>
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
])

export default router;