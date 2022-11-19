import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServiceDetails from "../../Pages/Services/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services";
import Login from "../../Pages/Shared/Register/Login/Login";
import SignUp from "../../Pages/Shared/Register/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";



export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/services',
                loader: () => fetch('http://localhost:5000/services'),
                element: <Services></Services>
            },
            {
                path:'/services/:id',
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
                
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
            {
                path:'/addServices',
                element:<PrivateRoutes>
                    <AddServices></AddServices>
                </PrivateRoutes>
            },
            {
                path:'/myReviews',
                element:<PrivateRoutes>
                    <MyReviews></MyReviews>
                </PrivateRoutes>
            }
        ]
    }
])