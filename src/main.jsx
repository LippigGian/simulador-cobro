import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainSimulador from './components/MainSimulador.jsx'
import '@fontsource/rubik'; // Estilos básicos
import '@fontsource/rubik/400.css'; // Peso específico

import Index from './components/Index.jsx';
import Navbar from './components/Navbar.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar></Navbar>
    <Index></Index> 
    <MainSimulador></MainSimulador>
    
  </StrictMode>,
)
