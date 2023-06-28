import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//theme
import "primereact/resources/themes/vela-green/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";   

import 'primeicons/primeicons.css';
                                            
        



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
