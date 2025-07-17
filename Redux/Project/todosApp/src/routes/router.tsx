import { createBrowserRouter } from "react-router";
import App from './../App';
import Tasks from "@/Pages/tasks";


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
            }
        ]
    }
]

)

export default router;