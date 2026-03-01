import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PaginaInicial from './pages/PaginaInicial/PaginaInicial'
import Projetos from './pages/Projetos/Projetos'
import SobreNos from './pages/SobreNos/SobreNos'
import './App.css'

function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<PaginaInicial />}/>
          <Route path='/projetos' element={<Projetos />}/>
          <Route path='/sobrenos' element={<SobreNos />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
