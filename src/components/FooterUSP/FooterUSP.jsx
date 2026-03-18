import style from "./Footer.module.css"
import coisoPet from "../../assets/FooterUSP/logo mono verde escuro horizontal.png"
import rede_social_youtube from "../../assets/FooterUSP/youtube verde.png"
import rede_social_linkedin from "../../assets/FooterUSP/linkedin verde.png"
import rede_social_instagram from "../../assets/FooterUSP/instagram verde.png"
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
            <hr />
            <h3>Grupo de Educação Tutorial do ICMC/USP</h3>
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

        <div className={style.redes_sociais}>
          <h3>Nossas Redes Sociais</h3>
          <div className={style.icones_redes}>
            <a href="">
              <img src={rede_social_instagram} alt="" />
            </a>
            <a href="">
              <img src={rede_social_youtube} alt="" />
            </a>
            <a href="">
              <img src={rede_social_linkedin} alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className={style.baixo}>
        <div className={style.baixo_item}><img src={logo_usp} alt="Logo da Universidade de São Paulo" /></div>
        <div className={style.baixo_item}><img src={logo_icmc} alt="Logo do ICMC" /></div>
        <div>
        <h1>
          Comissão de Cultura e<br /> Extensão Universitária<br />
          <spam>ICMC/USP - São Carlos</spam>
        </h1>
        </div>
        <div className={style.baixo_item}><img src={logo_mec} alt="Logo do ministério da educação" /></div>
      </div>
    </footer>
  )
}