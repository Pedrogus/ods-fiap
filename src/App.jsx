import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashbord from './pages/DadosdeRecursos'
import SettingsPage from './pages/Settings'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index='/' element={<Login/>} />
      <Route path='/Home' element={<Home/>} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Dashbord' element={<Dashbord />} />
      <Route path='/Settings' element ={<SettingsPage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
