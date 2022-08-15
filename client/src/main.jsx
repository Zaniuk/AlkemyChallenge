import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from './routes/Home'
import Edit from './routes/Edit';
import Create from './routes/Create';
import NotFound from './routes/NotFound';
import Login from './routes/Login';
import './assets/pico.min.css'
import EditSucess from './components/EditOperation/EditSucess';
import Register from './routes/Register';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/edit/:id' element={<Edit/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/sucess' element={<EditSucess/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
