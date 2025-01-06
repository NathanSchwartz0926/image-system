import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import PageContextProvider from './context/PageContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <PageContextProvider>
      <App />
    </PageContextProvider>
  </BrowserRouter>,
)
