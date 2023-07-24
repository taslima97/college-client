import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Details from "../Pages/Details/Details";
import Login from "../Pages/Login/Login";

import SignUp from "../Pages/SignUp/SignUp";
import AllCollege from "../Pages/AllCollege/AllCollege";
import Admition from "../Pages/Admition/Admition";
import MyCollege from "../Pages/MyCollege/MyCollege";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PriveteRouter from "./PriveteRouter";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/details/:id',
        element:<PriveteRouter><Details></Details></PriveteRouter>,
        loader: ({params}) => fetch(`http://localhost:5000/Colleges/${params.id}`)
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path:'/allcollege',
        element:<AllCollege></AllCollege>
      },
      {
        path:'/admission',
        element:<Admition></Admition>
      },
      {
        path:'/mycollege',
        element:<MyCollege></MyCollege>
      },
     
    ]
  },
]);
export default router