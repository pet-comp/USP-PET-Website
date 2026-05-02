import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
import icone_ensino from "../../assets/PaginaInicial/icone_ensino.svg"
import icone_pesquisa from "../../assets/PaginaInicial/icone_pesquisa.svg"
import icone_extensao from "../../assets/PaginaInicial/icone_extensao.svg"
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

import frentes from "../../data/frentes.json";

import semrecImg from "../../assets/PaginaInicial/fotos-frentes/semana_recepcao.webp"
import codifiqueImg from "../../assets/PaginaInicial/fotos-frentes/codifique.svg"
import comunicacaoImg from "../../assets/PaginaInicial/fotos-frentes/comunicacao.svg"
import fullstackImg from "../../assets/PaginaInicial/fotos-frentes/fullstack.svg"
import gestaoImg from "../../assets/PaginaInicial/fotos-frentes/gestao.svg"
import overclockImg from "../../assets/PaginaInicial/fotos-frentes/overclock.svg"
import pesquisaImg from "../../assets/PaginaInicial/fotos-frentes/pesquisa.svg"
import socialImg from "../../assets/PaginaInicial/fotos-frentes/social.svg"

const imagens_frentes = {
    semana_recepcao: semrecImg,
    codifique: codifiqueImg,
    comunicacao: comunicacaoImg,
    fullstack: fullstackImg,
    gestao: gestaoImg,
    overclock: overclockImg,
    pesquisa: pesquisaImg,
    social: socialImg
  };

function Banner({ navigate }) {
  return (
    <motion.div 
      className={style.banner}
      initial={{ opacity: 1, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0 }}
      viewport={{ once: true }}
    >
      <img 
        src={img_banner} 
        alt="Imagem com alguns dos membros do PET" 
      />
      <div className={style.posicao_botao_banner} >
        <button onClick={() => navigate('/sobrenos')}>Conheça mais sobre nós</button>
      </div>
    </motion.div>
  )
}

function Introducao() {
  function Pilar({banner, tamanho_banner, Icone, texto}) {
    return (
      <motion.div 
        className={style.pilar}
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        viewport={{ once: true }} 
      >
        <img 
          src={banner} 
          alt="Banner do pilar" 
          className={`${style.banner_pilar} ${style[`pilar_banner_${tamanho_banner}`]}`}
        />
        <img 
          src={Icone}
          alt="Icone do pilar"
          style={{width : "3rem", height : "3rem", color: "#2D2D2D"}}
        />
        <h4>{texto}</h4>
      </motion.div>
    )
  }

  return (
    <div className={style.introducao}>
      <motion.div 
        className={style.intro_conteudo}
        initial={{ opacity: 0, x: -50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        viewport={{ once: true }} 
      >
        <h3>Seja bem vinde ao</h3>
        <h1>PET Computação!</h1>
        <p>Somos o Programa de Educação Tutorial (PET) do ICMC/USP São Carlos, um grupo formado por estudantes que desenvolvem projetos de ensino, pesquisa e extensão de forma integrada. Aqui, colocamos a mão na massa para aprender, compartilhar conhecimento e gerar impacto dentro e fora da universidade — tudo conectado pelos nossos pilares, que você vai conhecer a seguir:</p>
        <div className={style.pilares}>
          <Pilar banner={banner_ensino} tamanho_banner={"small"} Icone={icone_ensino} texto={"Ensino"}/>
          <Pilar banner={banner_pesquisa} tamanho_banner={"medium"} Icone={icone_pesquisa} texto={"Pesquisa"}/>
          <Pilar banner={banner_extesao} tamanho_banner={"large"} Icone={icone_extensao} texto={"Extensão"}/>
        </div>
      </motion.div>
      
      <motion.div 
        className={style.pet_logo_intro}
        initial={{ opacity: 0, x: 50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        viewport={{ once: true }} 
      >
        <img src={pet_coisa} 
          alt="Uma núvem roxa atuando como plano de fundo para o logo do PET." 
        />
      </motion.div>
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
  const [frenteSelecionada, setFrenteSelecionada] = useState(frentes[0]);

  useEffect(() => {
    // Para evitar delay pro usuário ao trocar de frente, vamos carregar todas as imagens inicialmente
    Object.values(imagens_frentes).forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  return(
    <div 
      style={{backgroundColor : "#004D33", width : "100%", 
        marginTop : "100px", zIndex : "200", position : "relative",
        boxShadow : "0 5px 4px rgba(0, 0, 0, 0.4)"
      }}
    >
      <div className={style.conteudos}>

        <motion.div 
          className={style.nossas_frentes}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          viewport={{ once: true }}
        >
          <h1>Conheça nossas frentes</h1>
          <h2>- Ativas -</h2>
        </motion.div>

        <div className={style.container_frentes}>

          <motion.div 
            className={style.info_frentes}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3 }}
            viewport={{ once: true }}
          >
            <p>Nosso grupo é organizado em 8 frentes de atuação, que se conectam e se complementam de forma a abranger integralmente nossos pilares.</p>
            
            <div className={style.botes_frentes}>
              {frentes.map((frente) => (
                <button
                  key={frente.nome}
                  onClick={() => setFrenteSelecionada(frente)}
                  className={
                    frenteSelecionada.nome === frente.nome
                      ? style.botao_ativo
                      : style.botao
                  }
                >
                  {frente.nome}
                </button>
              ))}
            </div>
            
            <div className={style.select_frentes}>
              <label htmlFor="frentes">Selecione uma frente:</label>
              <select 
                id="frentes"
                value={frenteSelecionada.nome}
                onChange={(e) => {
                  const selecionada = frentes.find(f => f.nome === e.target.value);
                  setFrenteSelecionada(selecionada);
                }}
              >
                {frentes.map((frente) =>(
                  <option key={frente.nome} value={frente.nome}>
                    {frente.nome}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>

          <motion.div 
            className={style.frente_image}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3 }}
            viewport={{ once: true }}
          >
            <img src={imagens_frentes[frenteSelecionada.imagem]} alt={`Imagem da frente ${frenteSelecionada.imagem}.`} />
            <span>
              {frenteSelecionada.descricao}
            </span>
          </motion.div>
          
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
      <motion.div 
        className={style.conteudo_grupo_avisos}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
        viewport={{ once: true }}
      >
        <h1>Gostou do que viu?</h1>
        <a href="https://t.me/PETcompUSP" style={{ textDecoration: 'none' }} className={style.tele_btn_a}>
          <button className={style.tele_btn} style={{ pointerEvents: 'none' }}> 
            <FaTelegramPlane style={{width : "39px", height : "33px", color : "#FCF5E5"}}/>
            Entre no nosso grupo de avisos!
          </button>
        </a>
      </motion.div>
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
        </div>

        <Frentes />
        <Avisos />
        <FooterUSP />
        
      </main>
    </div>
  )
}