import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/block/Layout"
import HomeScreen from "../pages/HomeScreen"
import AboutPage from "../pages/AllPages/AboutPages/AboutPage"
import ContactPage from "../pages/AllPages/ContactPage"


export const mainRoute = createBrowserRouter([
    {
        element: <Layout/>,
        path: "/",
        children:[
            {
                index: true,
                element: <HomeScreen/>
            }, 
            {
                path: "/about",
                element: <AboutPage/>,
                index: true
            },
            {
                path: "/contact",
                element: <ContactPage/>,
                index: true
            }
        ]
    }
])