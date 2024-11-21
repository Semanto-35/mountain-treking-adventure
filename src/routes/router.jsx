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
            loader: ()=>fetch('/adventure.json')
          }
        ]
      },
      {
        path: '/details/:detailsId',
        element: <AdventureDetails></AdventureDetails>,
        loader: ()=>fetch('/adventure.json')
      },
      {
        path: '/profile',
        element: <MyProfile></MyProfile>
      },
      {
        path: '/updateProfile',
        element: <UpdateProfile></UpdateProfile>
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
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
])

export default router;