import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router'
import CoinCard from "./components/CoinCard";
import LimitSelector from "./components/LimitSelector";
import FilterInput from "./components/FilterInput";
import SortSelector from "./components/SortSelector";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </StrictMode>,
)
