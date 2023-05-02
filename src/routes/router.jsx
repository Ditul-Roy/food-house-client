import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Chef from "../pages/Home/Chef/Chef";
import RecipeLayout from "../layout/RecipeLayout";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
import Login from "../pages/LogIn/LogIn/Login";
import SignUp from "../pages/LogIn/SignUp/SignUp";
import LoginLayout from "../layout/LoginLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
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
            }
        ]
    },
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/chef',
                element: <Chef></Chef>,
                loader: () => fetch('http://localhost:5000/chef')
            }
        ]
    },
    {
        path: 'recipe',
        element: <RecipeLayout></RecipeLayout>,
        children: [
            {
                path: ':id',
                element: <RecipeDetails></RecipeDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
            }
        ]
    },
])
export default router;