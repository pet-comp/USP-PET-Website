import style from "./Footer.module.css"
import coisoPet from "../../assets/FooterUSP/coiso_pet.png"
import logo_usp from "../../assets/logo_usp.png"
import logo_icmc from "../../assets/logo_icmc_preto_1.png"
import logo_mec from "../../assets/logo_mec_hoz.png"

import { MdEmail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function FooterUSP () {
  return (
    <footer className={style.footer}>

      <div className={style.cima}>
        <div className={style.cima_item}>
            <img src={coisoPet} alt="Logo do pet computação" />
        </div>

        <div className={style.email_loc}>
          <MdEmail style={{height : "40px", width : "37px"}}/>
          <a href="mailto:petcom@icmc.usp.br">petcom@icmc.usp.br</a>
          <HiOutlineLocationMarker style={{height : "40px", width : "37px"}}/>
          <span>
              Av. Trab. São Carlense,<br />
              400 - São Carlos/SP<br />
              Bloco 1, sala 1-103 do ICMC
          </span>
        </div>
      </div>

      <div className={style.baixo}>
        <div className={style.baixo_item}><img src={logo_usp} alt="Logo da Universidade de São Paulo" /></div>
        <div className={style.baixo_item}><img src={logo_icmc} alt="Logo do ICMC" /></div>
        <h1>Comissão de Cultura e extensão universitária</h1>
        <div className={style.baixo_item}><img src={logo_mec} alt="Logo do ministério da educação" /></div>
      </div>
    </footer>
  )
}