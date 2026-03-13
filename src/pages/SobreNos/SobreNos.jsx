import { Fragment, useEffect, useState } from "react";
import { FaBookOpen, FaChevronLeft, FaChevronRight, FaGraduationCap } from "react-icons/fa";
import { MdOutlineScience } from "react-icons/md";

import NavBar from "../../components/NavBar/NavBar";
import FooterUSP from "../../components/FooterUSP/FooterUSP";
import MemberCard from "../../components/MemberCard/MemberCard";
import styles from "./SobreNos.module.css";
import mocks from "./sobreNos.mocks.json";

const {
  stats,
  pillars,
  historyEras,
  historyPhoto,
  members,
  heroSlides,
} = mocks;

const pillarIcons = {
  graduation: <FaGraduationCap />,
  book: <FaBookOpen />,
  science: <MdOutlineScience />,
};

function HeroSection() {
  const totalSlides = heroSlides.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (totalSlides <= 1) return undefined;

    const interval = setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % totalSlides);
    }, 4500);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToPreviousSlide = () => {
    setCurrentSlide((previous) => (previous - 1 + totalSlides) % totalSlides);
  };

  const goToNextSlide = () => {
    setCurrentSlide((previous) => (previous + 1) % totalSlides);
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
        {stats.map((stat, index) => (
          <Fragment key={`${stat.label}-${index}`}>
            <div className={styles.statItem}>
              <p>
                <span>{stat.value}</span> {stat.label}
              </p>
              <small>{stat.detail}</small>
            </div>

            {index < stats.length - 1 && <div className={styles.separator} />}
          </Fragment>
        ))}
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
              {pillarIcons[pillar.icon]}
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
  const [activeEraIndex, setActiveEraIndex] = useState(0);
  const totalEras = historyEras.length;
  const activeEra = historyEras[activeEraIndex];

  const goToPreviousEra = () => {
    setActiveEraIndex((previous) => (previous - 1 + totalEras) % totalEras);
  };

  const goToNextEra = () => {
    setActiveEraIndex((previous) => (previous + 1) % totalEras);
  };

  return (
    <section className={styles.historySection}>
      <h3>Nossa história</h3>

      <div className={styles.historyTabs}>
        {historyEras.map((era, index) => (
          <button
            key={era.period}
            type="button"
            className={index === activeEraIndex ? styles.historyTabActive : ""}
            onClick={() => setActiveEraIndex(index)}
          >
            {era.period}
          </button>
        ))}
      </div>

      <div className={styles.historyContent}>
        <div className={styles.historyText}>
          <h4>{activeEra.title}</h4>
          <p className={styles.historyPeriod}>{activeEra.period}</p>
          <p>{activeEra.content}</p>
        </div>

        <div className={styles.historyCarouselMock}>
          <button type="button" aria-label="Era anterior" onClick={goToPreviousEra}>
            <FaChevronLeft />
          </button>

          <div className={styles.photoMock}>
            <div className={styles.badgeG}>{historyPhoto.badge}</div>
          </div>

          <p className={styles.historyPhotoCaption}>{historyPhoto.caption}</p>

          <button type="button" aria-label="Próxima era" onClick={goToNextEra}>
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

  const totalSlides = memberSlides.length || 1;
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((previous) => (previous - 1 + totalSlides) % totalSlides);
  };

  const goToNextSlide = () => {
    setCurrentSlide((previous) => (previous + 1) % totalSlides);
  };

  return (
    <section className={styles.membersSection}>
      <h3>Integrantes</h3>
      <p style={{ fontWeight: "bold" }}>
        Conheça os alunos que fazem o PET acontecer!
      </p>
      <div className={styles.membersCarousel}>
        <button
          type="button"
          className={`${styles.membersNavButton} ${styles.membersNavButtonLeft}`}
          onClick={goToPreviousSlide}
          aria-label="Integrante anterior"
        >
          <FaChevronLeft />
        </button>

        <div className={styles.membersViewport}>
          <div
            className={styles.membersTrack}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {memberSlides.map((membersGroup, groupIndex) => (
              <div key={`members-group-${groupIndex}`} className={styles.memberSlide}>
                {membersGroup.map((member, memberIndex) => (
                  <MemberCard photo="/placeholder.webp" key={`member-${groupIndex * membersPerSlide + memberIndex}`} {...member} />
                ))}
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className={`${styles.membersNavButton} ${styles.membersNavButtonRight}`}
          onClick={goToNextSlide}
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
            className={`${styles.memberDot} ${index === currentSlide ? styles.memberDotActive : ""}`}
            onClick={() => setCurrentSlide(index)}
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