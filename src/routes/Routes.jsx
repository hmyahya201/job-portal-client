
import {createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "./../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import MainLayout from "../layouts/Main/MainLayout";
import Home from "../pages/Home/Home";
import AddJob from "../pages/AddJob/AddJob";
import MyJobs from "../pages/MyJobs/MyJobs";
import AllJobs from "../pages/AllJobs/AllJobs";
import JobDetails from "../pages/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "addJob",
        element: <AddJob></AddJob>,
      },
      {
        path: "all-jobs",
        element: <AllJobs></AllJobs>
      },
      {
        path: "MyJobs",
        element: <MyJobs></MyJobs>,
      },
      {
        path: "jobdetails",
        element: <JobDetails></JobDetails>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
