import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './router/router'
import './styles/global/index.css'
import './styles/global/button.css'
import { AuthProvider } from './contexts/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
         <App/>
  </AuthProvider>
)
