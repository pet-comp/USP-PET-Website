import NavBar from "../../components/NavBar/NavBar";
import FooterUSP from "../../components/FooterUSP/FooterUSP";
import style from "./Projetos.module.css";
import decoLeft from "../../assets/Projetos/deco_lines_1.svg";
import decoRight from "../../assets/Projetos/deco_lines_2.svg";
import ProjectFilters from "../../components/Projetos/ProjectFilters/ProjectFilters.jsx";
import ProjectList from "../../components/Projetos/ProjectList/ProjectList";
import FotoProjetos from "../../assets/equipe/membros-jardim-secreto.webp"

import { useMemo, useState } from "react";
import data from "../../data/projects.json";

function Introducao() {
  return (
    <div className={style.projetosIntro}>
      <img
        className={style.decoLeft}
        src={decoLeft}
        alt="Linhas decorativas à esquerda do conteúdo"
        aria-hidden="true"
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
          <button className={style.button}>Veja nossos projetos</button>
        </div>

        <div className={style.sectionImage}>
          <img src={FotoProjetos} alt="equipe do pet computação reunida no jardim secreto do ICMC após a conclusão de um projeto" />
        </div>
        
      </div>
    </div>
  );
}
function ProjetosList() {
  const projects = data.projects ?? [];
  const [active, setActive] = useState("Todos");
  const [view, setView] = useState("grid");

  const categories = ["Todos", ...(data.categories ?? [])];

  const filtered = useMemo(() => {
    if (active === "Todos") return projects;
    return projects.filter((p) => p.category === active);
  }, [projects, active]);

  return (
    <div className={style.sectionAllProjects}>
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
        value={active}
        onChange={setActive}
        view={view}
        onToggleView={() => setView((v) => (v === "grid" ? "list" : "grid"))}
      />
      <ProjectList projects={filtered} />
    </div>
  );
}

export default function Projetos() {
  return (
    <div>
      <NavBar />
      <main>
        <div className={style.conteudoProjetos}>
          <Introducao />
          <ProjetosList />
        </div>

        <FooterUSP />
      </main>
    </div>
  );
}
