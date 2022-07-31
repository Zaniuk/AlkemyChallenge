import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from './routes/Home'
import Edit from './routes/Edit';
import Create from './routes/Create';
import './assets/pico.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/edit/:id' element={<Edit/>} />
        <Route path='/create' element={<Create/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
