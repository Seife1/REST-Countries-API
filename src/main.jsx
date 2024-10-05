import {StrictMode} from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {CountryProvider} from './context'


ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountryProvider>
      <App />
    </CountryProvider>
  </StrictMode>,
)
