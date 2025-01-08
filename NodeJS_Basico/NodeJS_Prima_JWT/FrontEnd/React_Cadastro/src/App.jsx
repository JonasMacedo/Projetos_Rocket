import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"

import Cadastro from "./pages/Cadastro/index.jsx"
import Login from "./pages/Login/index.jsx"
import ListUsers from "./pages/Lista/index.jsx"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cadastro/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/listusers" element={<ListUsers/>}/>
      </Routes>    
    </BrowserRouter>
  )
}

export default App 
