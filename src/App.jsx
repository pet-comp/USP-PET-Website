import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

// Páginas importadas
import PaginaInicial from './pages/PaginaInicial/PaginaInicial'
import SobreNos from './pages/SobreNos/SobreNos'

function App() {

  return (
    <div className='App'>

      <Router> {/* BrowserRouter observa a URL atual e permite trocar de página sem recarregar todo o site, mantendo o comportamento de SPA */}

        <ScrollToTop /> {/* Quando trocamos de página, esse componente garante que o conteudo seja exibido a partir do seu topo */}

        <Routes>
          {/* Route: representa uma rota específica e determina qual componente será carregado de acordo com o path atual */}
          <Route path='/' element={<PaginaInicial />}/>
          <Route path='/sobrenos' element={<SobreNos />}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
