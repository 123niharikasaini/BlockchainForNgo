import {createBrowserRouter} from "react-router-dom"
import App from "../App"
import Home from "../components/Home"
import Donate from "../sec-root/Donate";

const router=createBrowserRouter(
    [
        {
            path:'/',
            element:<App/>,
            children:[
                {
                    path:"/",
                    element:<Home/>
                }
            ]
        },
        {
            path:"/sec",
            element:<Donate/>,
        }
    ])


export default router;