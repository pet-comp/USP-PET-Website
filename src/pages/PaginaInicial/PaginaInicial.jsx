import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar"
import FooterUSP from "../../components/FooterUSP/FooterUSP";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import style from "./Pginit.module.css"
import img_banner from "../../assets/PaginaInicial/banner_pet_desktop.png"
import pet_coisa from "../../assets/PaginaInicial/pet_coisa.png"
import banner_ensino from "../../assets/PaginaInicial/banner_ensino.svg"
import banner_pesquisa from "../../assets/PaginaInicial/banner_pesquisa.svg"
import banner_extesao from "../../assets/PaginaInicial/banner_extensao.svg"
import indo_cima from "../../assets/PaginaInicial/indo_cima.svg"
import indo_baixo from "../../assets/PaginaInicial/indo_baixo.svg"
import indo_cima_direita from "../../assets/PaginaInicial/indo_cima_direita.svg"
import indo_baixo_direita from "../../assets/PaginaInicial/indo_baixo_direita.svg"

import { HiOutlineAcademicCap } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";
import { PiGraph } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";

function Banner({ navigate }) {
  return (
    <div className={style.banner}>
      <img 
        src={img_banner} 
        alt="Imagem com alguns dos membros do PET" 
      />
      <button onClick={() => navigate('/sobrenos')}>Conheça mais sobre nós</button>
    </div>
  )
}

function Introducao() {
  function Pilar({banner, tamanho_banner, Icone, texto}) {
    return (
      <div className={style.pilar}>
        <img 
          src={banner} 
          alt="Banner do pilar" 
          style={{width : tamanho_banner}}
        />
        <Icone style={{width : "3rem", height : "3rem", color: "#2D2D2D"}}/>
        <h4>{texto}</h4>
      </div>
    )
  }

  return (
    <div className={style.introducao}>
      <div className={style.intro_conteudo}>
        <h3>Seja bem vinde ao</h3>
        <h1>PET Computação!</h1>
        <p>Somos o Projeto de Educação e Tutorial da USP São Carlos (ICMC), tempos muuuitos projetos voltados aos nossos três pilares, fique à vontade para conhecer:</p>
        <Pilar banner={banner_ensino} tamanho_banner={"5rem"} Icone={HiOutlineAcademicCap} texto={"Ensino"}/>
        <Pilar banner={banner_pesquisa} tamanho_banner={"7rem"} Icone={IoBookOutline} texto={"Pesquisa"}/>
        <Pilar banner={banner_extesao} tamanho_banner={"9rem"} Icone={PiGraph} texto={"Extensão"}/>
      </div>
      <div className={style.pet_logo_intro}>
        <img src={pet_coisa} 
          alt="Uma núvem roxa atuando como plano de fundo para o logo do PET." 
        />
      </div>
    </div>
  )
}

function Resumo() {
  const resumos = [{data : "Até 14/10", desc : "Inscrição para a caminhada soldiária"},
    {data : "01/10 até 14/10", desc : "Inscrição para a caminhada soldiária"},
    {data : "14/10", desc : "Aula de Clean Code"},
    {data : "99/99", desc : "tst"},
    {data : "99/99", desc : "tst"},
    {data : "99/99", desc : "tst"},
  ]


  return (
    <div className={style.resumo_container}>
      <div className={style.resumo_t_container}>
        <h2>Resumo</h2>
      </div>
      <div className={style.resumo_eventos}>
        {
        resumos.map((v, i) => {
          if (i === 0) {
            return (
              <div key={i} className={style.primeiro_resumo}>
                <p><span>{v.data}</span> {v.desc}</p>
              </div>
            )
          } else {
            return (
              <p key={i}><span>{v.data}</span> {v.desc}</p>
            )
          }
        })
        }
      </div>
    </div>
  )
}

function Carrossel() {
  const swiperRef = useRef(null);
  const [indexImgCentral, setIndexImgCentral] = useState(0)
  const imgs = ['/img_cthulhu.png', '/solida_cam.png', '/clc.png', '/cartilha.png', '/placeholder.webp', '/placeholder.webp', '/placeholder.webp']

  return (
    <div style={{position : 'relative'}}>
      <Swiper
        slidesPerView={3.5}
        initialSlide={0}
        spaceBetween={20}
        modules={[Navigation]}
        className={style.carrosel}
        onBeforeInit={(swiper) => {swiperRef.current = swiper;}}
        onSlideChange={(swiper) => setIndexImgCentral(swiper.realIndex)}
      >
        {
          imgs.map((img, i) => {
            /* Colocando o estilo dos slides distantes
            */
            let distanciaDoCentro = i - indexImgCentral;

            let posicaoClasse = '';
            if (Math.abs(distanciaDoCentro) == 3)
              posicaoClasse = style.dist_2;
            else if ( i < indexImgCentral) {
              if (Math.abs(distanciaDoCentro) == 1)
                posicaoClasse = style.dist_2;
            }

            return (
              <SwiperSlide key={i} className={style.carrosel_slide}>
                <img 
                  src={img} 
                  alt="" 
                  className={`${style.carrosel_img} ${posicaoClasse}`}
                />
              </SwiperSlide>
            )
          })
        }
      </Swiper>

      <button
        aria-label="Navegar para tras nos slides" 
        onClick={() => swiperRef.current?.slidePrev()} 
        className={style.btn_para_tras}
      >
        <MdKeyboardArrowLeft style={{height : "30px", width : "30px", color : "white"}}/>
      </button>
      <button 
        aria-label="Navegar para frente nos slides"
        onClick={() => swiperRef.current?.slideNext()} 
        className={style.btn_para_frente}
      >
        <MdKeyboardArrowRight style={{height : "30px", width : "30px", color : "white"}}/>
      </button>
    </div>
  );
}

function NossasAtividades () {
  return (
    <>
      <div className={style.nossas_atividades}>
        <h1>Nossas Atividades</h1>
        <h2>- Atuais -</h2>
      </div>

      <div className={style.resumo_carrossel}>
        <Resumo />
        <div style={{width : "100%"}}>
          <Carrossel />
        </div>
      </div>
    </>
  )
}

function Frentes() {
  return(
    <div style={{backgroundColor : "#004D33", width : "100%", 
        marginTop : "130px", zIndex : "200", position : "relative",
        boxShadow : "0 5px 4px rgba(0, 0, 0, 0.4)"
      }}
    >
      <div className={style.conteudos} style={{backgroundColor : "#004D33", zIndex : "200"}}>

        <div className={style.nossas_frentes}>
          <h1>Conheça nossas frentes</h1>
          <h2>- Ativas -</h2>
        </div>

        <div className={style.container_frentes}>

          <div className={style.info_frentes}>
            <p>Nosso grupo é organizado em 11 frentes de atuação, que se conectam e se complementam de forma a abranger integralmente nossos pilares.</p>
            <div className={style.botes_frentes}>
              <button>Cartilha</button>
              <button>Codifikids</button>
              <button>Codifique</button>
              <button>Comunicação</button>
              <button>Full-Stack</button>
              <button>Gestão</button>
              <button>Pesquisa</button>
              <button>Social</button>
              <button>The Missing Semester</button>
            </div>
          </div>

          <div className={style.frente_image}>
            <img src="/codifikids.png" alt="Imagem do curso do codifikids." />
          </div>
        </div>

      </div>
    </div>
  )
}

function Avisos() {
  return (
    <div className={style.grupo_de_avisos}>
      <img src={indo_cima} alt="" />
      <img src={indo_baixo} alt="" />
      <img src={indo_cima_direita} alt="" />
      <img src={indo_baixo_direita} alt="" />
      <h1>Gostou do que viu?</h1>
      <button className={style.tele_btn}> 
        <FaTelegramPlane style={{width : "39px", height : "33px", color : "#FCF5E5"}}/>
        Entre no nosso grupo de avisos!
      </button>
    </div>
  )
}

export default function PaginaInicial() {
  const navigate = useNavigate();

  return(
    <div>
      <NavBar />
      <main style={{zIndex : "-100", width : "100%", backgroundColor : "#ECECEC"}}>
        <div className={style.conteudos}>
          <Banner navigate={navigate}/>
          <Introducao />
          <NossasAtividades />
        </div>

        <Frentes />
        <Avisos />
        <FooterUSP />
        
      </main>
    </div>
  )
}