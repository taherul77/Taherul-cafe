import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

//theme
import "primereact/resources/themes/vela-green/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";   

import 'primeicons/primeicons.css';
import {  RouterProvider } from 'react-router-dom';
import { router } from './Route/Route';
                                            
        



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
