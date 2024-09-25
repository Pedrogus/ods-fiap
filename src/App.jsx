import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashbord from './pages/DadosdeRecursos'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index='/' element={<Home/>} />
      <Route path='/Home' element={<Home/>} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Dashbord' element={<Dashbord />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
