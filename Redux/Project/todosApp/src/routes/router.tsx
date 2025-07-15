import { createBrowserRouter } from "react-router";
import App from './../App';


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
                element:<h1>Todos</h1>
            }
        ]
    }
]

)

export default router;