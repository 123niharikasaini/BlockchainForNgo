import {createBrowserRouter} from "react-router-dom"
import App from "../App"
import Home from "../components/Home"
import Donate from "../sec-root/Donate";
import AddNGO from "../components/AddNGO";

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
        
    ])


export default router;