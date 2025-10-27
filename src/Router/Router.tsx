
import { createBrowserRouter } from "react-router-dom";
import  Main_Layout from "../Layout/Main_Layout";


const router = createBrowserRouter ([
  {    path: '/',
      element: <Main_Layout></Main_Layout>,
      children: [
            {
                  
            }
      ]
},
   
      ]
)

export default router;