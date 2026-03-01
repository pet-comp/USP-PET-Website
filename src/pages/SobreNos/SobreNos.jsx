import { useEffect, useState } from "react";
import { FaBookOpen, FaChevronLeft, FaChevronRight, FaGraduationCap, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdOutlineScience } from "react-icons/md";
import { SiX } from "react-icons/si";

import NavBar from "../../components/NavBar/NavBar";
import FooterUSP from "../../components/FooterUSP/FooterUSP";
import MemberCard from "../../components/MemberCard/MemberCard";
import styles from "./SobreNos.module.css";

const pillars = [
  {
    title: "Educação",
    description: "Focamos na geração e difusão de conhecimento por meio de cursos, oficinas e materiais para a comunidade.",
    icon: <FaGraduationCap />,
    iconBg: "#E4D4ED",
    iconColor: "#9B39C1",
    titleColor: "#9B39C1",
  },
  {
    title: "Extensão",
    description: "Atuamos em ações e projetos que conectam universidade e sociedade de forma prática e transformadora.",
    icon: <FaBookOpen />,
    iconBg: "#D4E8D3",
    iconColor: "#4CB54A",
    titleColor: "#4CB54A",
  },
  {
    title: "Pesquisa",
    description: "Incentivamos investigação, inovação e produção de conteúdo técnico para fortalecer nossa área.",
    icon: <MdOutlineScience />,
    iconBg: "#F4D5EA",
    iconColor: "#F24DB8",
    titleColor: "#F24DB8",
  },
];

const members = [
  {
    name: "Nome do integrante",
    fronts: ["Social", "Gestão"],
    admission: "2023.1",
    interests: "IA e UX Design",
  },
  {
    name: "Nome do integrante",
    fronts: ["Comunicação"],
    admission: "2024.1",
    interests: "Front-end e Design",
  },
  {
    name: "Nome do integrante",
    fronts: ["Pesquisa"],
    admission: "2022.2",
    interests: "Visão Computacional",
  },
  {
    name: "Nome do integrante",
    fronts: ["Full-Stack"],
    admission: "2023.2",
    interests: "Sistemas Distribuídos",
  },
  {
    name: "Nome do integrante",
    fronts: ["Extensão"],
    admission: "2024.1",
    interests: "Educação e Inclusão",
  },
  {
    name: "Nome do integrante",
    fronts: ["Codifique"],
    admission: "2025.1",
    interests: "Dev Web e Python",
  },
  {
    name: "Nome do integrante",
    fronts: ["Pesquisa"],
    admission: "2022.2",
    interests: "Visão Computacional",
  },
  {
    name: "Nome do integrante",
    fronts: ["Full-Stack"],
    admission: "2023.2",
    interests: "Sistemas Distribuídos",
  },
  {
    name: "Nome do integrante",
    fronts: ["Extensão"],
    admission: "2024.1",
    interests: "Educação e Inclusão",
  },
  {
    name: "Nome do integrante",
    fronts: ["Codifique"],
    admission: "2025.1",
    interests: "Dev Web e Python",
  },
];

const heroSlides = [
  {
    src: "/placeholder.webp",
    alt: "Membros do PET Computação em atividade",
  },
  {
    src: "/solida_cam.png",
    alt: "Equipe do PET Computação em evento",
  },
  {
    src: "/cartilha.png",
    alt: "Projeto educacional produzido pelo PET Computação",
  },
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((previousSlide) => (previousSlide + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const goToPreviousSlide = () => {
    setCurrentSlide((previousSlide) => (previousSlide - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((previousSlide) => (previousSlide + 1) % heroSlides.length);
  };

  return (
    <section className={styles.heroSection}>
      <h1>Sobre Nós</h1>
      <h2>Venha conhecer mais sobre o PET Computação!</h2>

      <div className={styles.heroImageWrapper}>
        {heroSlides.map((slide, index) => (
          <div
            key={slide.src}
            className={`${styles.heroSlide} ${index === currentSlide ? styles.heroSlideActive : ""}`}
            aria-hidden={index !== currentSlide}
          >
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}

        <button
          type="button"
          className={`${styles.heroNavButton} ${styles.heroNavButtonLeft}`}
          onClick={goToPreviousSlide}
          aria-label="Imagem anterior"
        >
          <FaChevronLeft />
        </button>

        <button
          type="button"
          className={`${styles.heroNavButton} ${styles.heroNavButtonRight}`}
          onClick={goToNextSlide}
          aria-label="Próxima imagem"
        >
          <FaChevronRight />
        </button>
      </div>

      <div className={styles.heroDots}>
        {heroSlides.map((slide, index) => (
          <button
            key={`${slide.src}-dot`}
            type="button"
            className={`${styles.heroDot} ${index === currentSlide ? styles.heroDotActive : ""}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>

      <div className={styles.statsRow}>
        <div className={styles.statItem}>
          <p><span>+XX</span> membros</p>
          <small>ativos em 2026</small>
        </div>

        <div className={styles.separator} />

        <div className={styles.statItem}>
          <p><span>+XX</span> projetos</p>
          <small>em andamento</small>
        </div>

        <div className={styles.separator} />

        <div className={styles.statItem}>
          <p><span>+XX</span> anos</p>
          <small>de história</small>
        </div>
      </div>
    </section>
  );
}

function WhatIsPet() {
  return (
    <section className={styles.whatIsSection}>
      <div className={styles.whatIsContent}>
        <h3>O que é o PET?</h3>
        <p>
          Somos o Programa de Educação Tutorial da USP São Carlos (ICMC), formado por estudantes
          voluntários que desenvolvem atividades de ensino, pesquisa e extensão. Nosso objetivo é
          impactar positivamente alunos e comunidade por meio de iniciativas tecnológicas e educacionais.
        </p>
      </div>

      <div className={styles.whatIsImageWrapper}>
        <img src="/img_cthulhu.png" alt="Mascote do PET Computação" />
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className={styles.pillarsSection}>
      <h3>Nossos Pilares</h3>

      <div className={styles.pillarsGrid}>
        {pillars.map((pillar) => (
          <article key={pillar.title} className={styles.pillarCard}>
            <div
              className={styles.pillarIcon}
              style={{ backgroundColor: pillar.iconBg, color: pillar.iconColor }}
            >
              {pillar.icon}
            </div>
            <h4 style={{ color: pillar.titleColor }}>{pillar.title}</h4>
            <p>{pillar.description}</p>
            <button>Veja nossos projetos &gt;</button>
          </article>
        ))}
      </div>
    </section>
  );
}

function HistorySection() {
  return (
    <section className={styles.historySection}>
      <h3>Nossa história</h3>

      <div className={styles.historyTabs}>
        <button>1996 - 2005</button>
        <button>2006 - 2015</button>
        <button>2016 - 2026</button>
      </div>

      <div className={styles.historyContent}>
        <div className={styles.historyText}>
          <h4>Os primeiros anos do PET Computação</h4>
          <p>
            O programa PET Computação da USP teve início em 1996 com o propósito de fortalecer a
            formação acadêmica e humana de seus integrantes. Ao longo do tempo, consolidou projetos,
            ações sociais e atividades de ensino, sempre promovendo integração entre universidade e
            sociedade.
          </p>
        </div>

        <div className={styles.historyCarouselMock}>
          <button aria-label="Foto anterior">
            <FaChevronLeft />
          </button>

          <div className={styles.photoMock}>
            <div className={styles.badgeG}>G</div>
          </div>

          <button aria-label="Próxima foto">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

function MembersSection() {
  const membersPerSlide = 6;
  const memberSlides = [];

  for (let i = 0; i < members.length; i += membersPerSlide) {
    memberSlides.push(members.slice(i, i + membersPerSlide));
  }

  const totalMemberSlides = memberSlides.length || 1;
  const [currentMemberSlide, setCurrentMemberSlide] = useState(0);

  const goToPreviousMember = () => {
    setCurrentMemberSlide((previousSlide) => (previousSlide - 1 + totalMemberSlides) % totalMemberSlides);
  };

  const goToNextMember = () => {
    setCurrentMemberSlide((previousSlide) => (previousSlide + 1) % totalMemberSlides);
  };

  return (
    <section className={styles.membersSection}>
      <h3>Integrantes</h3>
      <p>Conheça os alunos que fazem o PET acontecer!</p>

      <div className={styles.membersCarousel}>
        <button
          type="button"
          className={`${styles.membersNavButton} ${styles.membersNavButtonLeft}`}
          onClick={goToPreviousMember}
          aria-label="Integrante anterior"
        >
          <FaChevronLeft />
        </button>

        <div className={styles.membersViewport}>
          <div
            className={styles.membersTrack}
            style={{ transform: `translateX(-${currentMemberSlide * 100}%)` }}
          >
            {memberSlides.map((membersGroup, groupIndex) => (
              <div key={`members-group-${groupIndex}`} className={styles.memberSlide}>
                {membersGroup.map((member, memberIndex) => (
                  <MemberCard key={`${member.name}-${groupIndex}-${memberIndex}`} {...member} />
                ))}
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className={`${styles.membersNavButton} ${styles.membersNavButtonRight}`}
          onClick={goToNextMember}
          aria-label="Próximo integrante"
        >
          <FaChevronRight />
        </button>
      </div>

      <div className={styles.membersDots}>
        {memberSlides.map((_, index) => (
          <button
            key={`members-dot-${index}`}
            type="button"
            className={`${styles.memberDot} ${index === currentMemberSlide ? styles.memberDotActive : ""}`}
            onClick={() => setCurrentMemberSlide(index)}
            aria-label={`Ir para grupo ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default function SobreNos() {
  return (
    <div className={styles.pageWrapper}>
      <NavBar />

      <main className={styles.mainContent}>
        <HeroSection />
        <WhatIsPet />
        <Pillars />
        <HistorySection />
        <MembersSection />
      </main>

      <FooterUSP />
    </div>
  );
}