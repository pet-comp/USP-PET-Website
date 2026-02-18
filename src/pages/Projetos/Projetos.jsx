import NavBar from "../../components/NavBar/NavBar";
import FooterUSP from "../../components/FooterUSP/FooterUSP";
import style from "./Projetos.module.css";
import decoLeft from "../../assets/Projetos/deco_lines_1.svg";
import decoRight from "../../assets/Projetos/deco_lines_2.svg";
import ProjectFilters from "../../components/Projetos/ProjectFilters/ProjectFilters";
import ProjectList from "../../components/Projetos/ProjectList/ProjectList";

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
      <img
        className={style.decoRight}
        src={decoRight}
        alt="Linhas decorativas à direita do conteúdo"
        aria-hidden="true"
      />
      <div className={style.sectionGrid}>
        <div className={style.sectionText}>
          <h1>
            Conheça nossos <span>projetos</span>
          </h1>
          <p>
            No PET Computação, desenvolvemos projetos que conectam ensino,
            pesquisa e extensão. Aqui você encontra iniciativas que geram
            impacto dentro e fora da universidade, de tecnologia a ações
            formativas.
          </p>
          <button className={style.button}>Veja nossos projetos</button>
        </div>
        <div className={style.sectionImage}>
          <img src="" alt="" />
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
    <div>
      <div className={style.sectionHeader}>
        <div className={style.sectionTitle}>
          <h1>
            Veja todos nossos <span>Projetos</span>
          </h1>
        </div>
        <div className={style.sectionDescription}>
          <p>
            Nossos projetos abrangem diversas áreas, desde desenvolvimento de
            software até ações sociais. Explore as categorias para encontrar
            iniciativas que mais te interessam.
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
      <main
        style={{ zIndex: "-100", width: "100%", backgroundColor: "#ffffff" }}
      >
        <div className={style.conteudos}>
          <Introducao />
          <ProjetosList />
        </div>

        <FooterUSP />
      </main>
    </div>
  );
}
