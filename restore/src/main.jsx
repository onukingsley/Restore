import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from "react-router-dom";


import router from "./router";
import GoogleTagManager from "./GoogleTagManager";
import {ContextProvider} from "./contexts/ContextProvider";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ContextProvider>
          <RouterProvider router={router} />
      </ContextProvider>


    </StrictMode>

)
