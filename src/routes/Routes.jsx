import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import PH from "../pages/PH";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import PrivateRoute from "../privateRoute/PrivateRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children : [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <PrivateRoute>
                    <About></About>
                </PrivateRoute>,
                children: [
                    {
                        path: '/about/ph',
                        element: <PH></PH>
                    }
                ]
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/profile',
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
            }
        ]
    }
])

export default routes