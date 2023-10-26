import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/block/Layout"
import HomeScreen from "../pages/HomeScreen"


export const mainRoute = createBrowserRouter([
    {
        element: <Layout/>,
        path: "/",
        children:[
            {
                index: true,
                element: <HomeScreen/>
            }
        ]
    }
])