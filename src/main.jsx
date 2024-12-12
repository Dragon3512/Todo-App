import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TodoContextProvider from './component/Context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <TodoContextProvider>
    <App />
    </TodoContextProvider>
)
