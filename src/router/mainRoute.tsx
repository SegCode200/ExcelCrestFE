import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/block/Layout"
import HomeScreen from "../pages/HomeScreen"
import AboutPage from "../pages/AllPages/AboutPages/AboutPage"
import ContactPage from '../pages/AllPages/Contact/ContactPage'
import AdmissionReq from "../pages/AllPages/Admission/AdmissionReq"
import ApplyNow from "../pages/AllPages/Admission/ApplyNow"
import MedicalCard from "../pages/AllPages/Programmes/MedicalCard"
import PublicHealth from "../pages/AllPages/Programmes/PublicHealth"
import CommunityHealth from "../pages/AllPages/Programmes/CommunityHealth"
import PharmacyTech from "../pages/AllPages/Programmes/PharmacyTech"


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
            },
            {
                path: "/admission",
                element: <AdmissionReq/>,
                index: true
            }
            ,
            {
                path: "/apply-now",
                element: <ApplyNow/>,
                index: true
            }
            ,
            {
                path: "/medical-health-assistant",
                element: <MedicalCard/>,
                index: true
            }
            ,
            {
                path: "/public-health-technician",
                element: <PublicHealth/>,
                index: true
            }
            ,
            {
                path: "/community-health-technician",
                element: <CommunityHealth/>,
                index: true
            }
            ,
            {
                path: "/pharamacy-technician",
                element: <PharmacyTech/>,
                index: true
            }
        ]
    }
])