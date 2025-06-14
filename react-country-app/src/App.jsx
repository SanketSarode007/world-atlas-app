import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { AppLayout } from "./Components/Layout/AppLayout"
import {Home} from "./pages/Home"
import {About} from "./pages/About"
import {Contact} from "./pages/Contact"
import {Country} from "./pages/Country"
import { ErrorPage } from "./pages/ErrorPage"
import { CountryInfo } from "./Components/Layout/CountryInfo"

import "./App.css"

const App = () => {

  const router = createBrowserRouter([
      {
        path: "/",
        element: <AppLayout/>,
        errorElement: <ErrorPage/>,
        children:[
          {
            path: "/",
            element: <Home/>
          },
          {
            path: "about",
            element: <About/>
          },
          {
            path: "contact",
            element: <Contact/>
          },
          {
            path:"country/:id",
            element: <CountryInfo/>
          },
          {
            path: "Country",
            element: <Country/>
          }
        ]
      }
      
  ])
  return <RouterProvider router={router}>
     
  </RouterProvider>
}

export default App;