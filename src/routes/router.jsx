import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Chef from "../pages/Home/Chef/Chef";
import RecipeLayout from "../layout/RecipeLayout";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
import Login from "../pages/LogIn/LogIn/Login";
import SignUp from "../pages/LogIn/SignUp/SignUp";
import LoginLayout from "../layout/LoginLayout";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Services from "../pages/Home/Services/Services";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Navigate to='/chef'></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: "signup",
                element: <SignUp></SignUp>
            },
        ]
    },
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/chef',
                element: <Chef></Chef>,
                loader: () => fetch('https://bangladeshi-chef-recipe-server.vercel.app/chef')
            },
            {
                path: '/service',
                element: <Services></Services>
            }
          
        ]
    },
    {
        path: 'recipe',
        element: <RecipeLayout></RecipeLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://bangladeshi-chef-recipe-server.vercel.app/chef/${params.id}`),
            }
        ]
    },
])
export default router;