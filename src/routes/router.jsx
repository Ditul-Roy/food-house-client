import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Chef from "../pages/Home/Chef/Chef";
import RecipeLayout from "../layout/RecipeLayout";
import RecipeDetails from "../pages/Home/RecipeDetails/RecipeDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Navigate to="/chef"></Navigate>
            },
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
    }
])
export default router;