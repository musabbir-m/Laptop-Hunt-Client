import CategoryProducts from "../../Pages/Categories/CategoryProducts/CategoryProducts";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");
const { default: Login } = require("../../Pages/Login/Login");
const { default: Signup } = require("../../Pages/Signup/Signup");

const router= createBrowserRouter([

    {
        path: '/', 
        element: <Main> </Main>, 
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login> </Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/categories/:id',
                element: <PrivateRoute><CategoryProducts></CategoryProducts></PrivateRoute>,
                loader: ({params})=>
                fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    }
])

export default router;