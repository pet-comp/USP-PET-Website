import NavBar from "../../components/NavBar/NavBar";
import FooterUSP from "../../components/FooterUSP/FooterUSP";
import style from "./Projetos.module.css";
import decoLeft from "../../assets/decorations/color-lines/linhas_lateral.svg";
import ProjectFilters from "../../components/Projetos/ProjectFilters/ProjectFilters.jsx";
import ProjectList from "../../components/Projetos/ProjectList/ProjectList";
import FotoProjetos from "/media/grupo/equipe/2026.2_jardim_secreto.webp"

import { useMemo, useState, useRef } from "react";
import data from "../../data/projects.json";

function Introducao({ onScrollToProjects }) {
  return (
    <div className={style.projetosIntro}>
      <img
        className={style.decoLeft}
        src={decoLeft}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
      <div className={style.sectionGrid}>
        <div className={style.sectionText}>

          <h1>
            CONHEÇA NOSSOS <br />
            <span>Projetos</span>
          </h1>

          <p>
            No PET Computação, tranformamos ideias e conhecimentos em projetos que integram <span style={{ color: "#A842C1" }}>ensino, pesquisa e extensão</span>. Desenvolvemos iniciativas que exploram a Computação na prática, incentivam a formação dos membros e aproximam o grupo da comunidade acadêmica e externa.
          </p>
          <button className={style.button} onClick={onScrollToProjects}>
            Veja nossos projetos
          </button>
        </div>

        <div className={style.sectionImage}>
          <img 
            src={FotoProjetos} 
            alt="equipe do pet computação reunida no jardim secreto do ICMC após a conclusão de um projeto"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
        
      </div>
    </div>
  );
}

function ProjetosList({ targetRef }) {
  const projects = data.projects ?? [];
  const [filter, setFilter] = useState("Todos");

  //  Categorias definidas de forma estática
  const categories = ["Todos", ...(data.categories ?? [])];

  const filtered = useMemo(() => {
    if (filter === "Todos") return projects;
    return projects.filter((p) => p.category?.includes(filter));
  }, [projects, filter]);

  return (
    <div ref={targetRef} className={style.sectionAllProjects}>
      <hr />
      <div className={style.sectionHeader}>
        <div className={style.sectionTitle}>
          <h1>
            PROJETOS DESENVOLVIDOS PELO <br />
            <span>PET COMPUTAÇÃO</span>
          </h1>
        </div>
        <div className={style.sectionDescription}>
          <p>
            Aqui você encontra desde soluções tecnológicas e projetos de desenvolvimento até estudos, atividades formativas e ações construídas para gerar impacto e compartilhar conhecimento dentro e fora da universidade.
          </p>
        </div>
      </div>
      <ProjectFilters
        options={categories}
        value={filter}
        onChange={setFilter}
      />
      <ProjectList projects={filtered} />
    </div>
  );
}

export default function Projetos() {
  const projetosSectionRef = useRef(null);

  const handleScroll = () => {
    projetosSectionRef.current?.scrollIntoView({
      behavior: "smooth", 
      block: "start",
    });
  };


  return (
    <div>
      <NavBar />
      <main>
        <div className={style.conteudoProjetos}>
          <Introducao onScrollToProjects={handleScroll}  />
          <ProjetosList targetRef={projetosSectionRef}  />
        </div>

        <FooterUSP />
      </main>
    </div>
  );
}
