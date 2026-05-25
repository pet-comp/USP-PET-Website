import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

import PaginaInicial from './pages/PaginaInicial/PaginaInicial'
import SobreNos from './pages/SobreNos/SobreNos'

import './App.css'

function App() {

  return (
    <div className='App'>
      <Router>

         <ScrollToTop />

        <Routes>
          <Route path='/' element={<PaginaInicial />}/>
          <Route path='/sobrenos' element={<SobreNos />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
