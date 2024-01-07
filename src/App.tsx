import React from 'react'
import {RouterProvider, Router} from "react-router-dom"
import { mainRoute } from './router/mainRoute'
import ScrollToTop from './components/reuse/ScrolltoTop'

const App = () => {
  return (
    <div >


      <RouterProvider router={mainRoute}/>
      <ScrollToTop/>

      
      
    </div>
  )
}

export default App