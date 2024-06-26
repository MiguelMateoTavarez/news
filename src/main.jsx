import React from 'react'
import ReactDOM from 'react-dom/client'
import { Journal } from './Journal.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Journal />
    </BrowserRouter>
  </React.StrictMode>,
)
