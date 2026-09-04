import style from "./Footer.module.css"
import logo_pet from "../../assets/brand/pet/logo_pet_hoz_verde_escuro.png"
import rede_social_youtube from "../../assets/icons/social/youtube_verde_escuro.png"
import rede_social_linkedin from "../../assets/icons/social/linkedin_verde_escuro.png"
import rede_social_instagram from "../../assets/icons/social/instagram_verde_escuro.png"
import rede_social_linktree from "../../assets/icons/social/linktree_verde_escuro.png"
import logo_usp from "../../assets/brand/partners/logo_usp_cinza.png"
import logo_icmc from "../../assets/brand/partners/logo_icmc_preto.png"
import logo_mec from "../../assets/brand/partners/logo_mec_horizontal_cinza.png"

import { MdEmail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function FooterUSP () {
  return (
    <footer className={style.footer}>

      <div className={style.cima}>
        <div className={style.cima_item}>
            <img src={logo_pet} alt="Logo do pet computação" />
            <hr />
            <h3>Grupo de Educação Tutorial do ICMC/USP</h3>
        </div>

        <div className={style.email_loc}>
          <MdEmail style={{height : "40px", width : "37px"}}/>
          <a href="mailto:petcomp@icmc.usp.br">petcomp@icmc.usp.br</a>
          <HiOutlineLocationMarker style={{height : "40px", width : "37px"}}/>
          <span className={style.endereco}>
              Av. Trab. São Carlense, <br />
              400 - São Carlos/SP <br />
              Bloco 1, sala 1-103 do ICMC
          </span>
        </div>

        <div className={style.redes_sociais}>
          <h3>Nossas Redes Sociais</h3>
          <div className={style.icones_redes}>
            <a href="https://www.instagram.com/petcomputacaousp/">
              <img src={rede_social_instagram} alt="" />
            </a>
            <a href="https://www.youtube.com/@PETComputacaoUSP">
              <img src={rede_social_youtube} alt="" />
            </a>
            <a href="https://www.linkedin.com/company/petcompusp/">
              <img src={rede_social_linkedin} alt="" />
            </a>
            <a href="https://linktr.ee/petcomputacaousp">
              <img src={rede_social_linktree} alt="" />
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
          <span>ICMC/USP - São Carlos</span>
        </h1>
        </div>
        <div className={style.baixo_item}><img src={logo_mec} alt="Logo do ministério da educação" /></div>
      </div>

      <div className={style.direitos_creditos}>
        <p>
          © {new Date().getFullYear()} PET Computação – USP São Carlos. Todos os direitos reservados.
          <br />
          Site desenvolvido pela equipe de desenvolvimento do PET Computação
        </p>
      </div>
    </footer>
  )
}