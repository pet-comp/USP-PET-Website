import { Link, useNavigate } from "react-router-dom";

import styles from './NVB.module.css'
import logo from '../../assets/logo_com_tipo_hoz_preto.png'

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div className={styles.barra}>
        <button 
          aria-label="Ir para pagina inicial"
          onClick={() => navigate('/')}
        >
          <img src={logo} alt="Imagem da logo do PET na qual esta escrito pet computação com enfase na palavra pet. É clicavel e leva para a pagina inicial." />
        </button>

        <div className={styles.direita}>
          <Link to='/sobrenos'>Sobre nós</Link>
        </div>
    </div>
  )
}