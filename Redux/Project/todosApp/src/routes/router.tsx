import { createBrowserRouter } from "react-router";
import App from './../App';
import Tasks from "@/Pages/Tasks";
import Users from "@/Pages/Users";


const router=createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'',
                element:<h1>Home</h1>
            },
            {
                path:'/todos',
                element:<Tasks/>
            },
            {
                path:'/users',
                element:<Users/>
            }
        ]
    }
]

)

export default router;