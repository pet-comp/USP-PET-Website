import { useEffect, useState } from "react";
import { FaBookOpen, FaChevronLeft, FaChevronRight, FaGraduationCap } from "react-icons/fa";
import { MdOutlineScience } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
import FooterUSP from "../../components/FooterUSP/FooterUSP";
import MemberCardFeatured from "../../components/MemberCardFeatured/MemberCardNew";
import styles from "./SobreNos.module.css";
import mocks from "./sobreNos.mocks.json";

const {
  stats,
  pillars,
  historyEras,
  members,
  photoSlides,
} = mocks;

const pillarIcons = {
  graduation: <FaGraduationCap />,
  book: <FaBookOpen />,
  science: <MdOutlineScience />,
};

// Custom hook para carousel
const useCarousel = (items = [], autoplayInterval = 9500) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % items.length);
    }, autoplayInterval);
    return () => clearInterval(interval);
  }, [items.length, autoplayInterval]);

  return {
    currentSlide,
    setCurrentSlide,
    goToPrevious: () => setCurrentSlide((prev) => (prev === 0 ? items.length - 1 : prev - 1)),
    goToNext: () => setCurrentSlide((prev) => (prev + 1) % items.length),
  };
};

// Custom hook para detecção de mobile
const useMobileView = (breakpoint = 720) => {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth <= breakpoint
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};

function PhotoSection() {
  const { currentSlide, goToPrevious, goToNext } = useCarousel(photoSlides, 4500);

  return (
    <section className={styles.heroSection}>
      <h1>Sobre Nós</h1>
      <h2>Venha conhecer mais sobre o PET Computação!</h2>

      <div className={styles.heroImageWrapper}>
        {photoSlides.map((slide, index) => (
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
          onClick={goToPrevious}
          aria-label="Imagem anterior"
        >
          <FaChevronLeft />
        </button>

        <button
          type="button"
          className={`${styles.heroNavButton} ${styles.heroNavButtonRight}`}
          onClick={goToNext}
          aria-label="Próxima imagem"
        >
          <FaChevronRight />
        </button>
      </div>

      <div className={styles.heroDots}>
        {photoSlides.map((slide, index) => (
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
          <div key={`stat-${index}`} className={styles.statItemWrapper}>
            <div className={styles.statItem}>
              <span>{stat.value}</span>
              <p>{stat.label}</p>
              <small>{stat.detail}</small>
            </div>
            {index < stats.length - 1 && <div className={styles.separator} />}
          </div>
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

      <div className={styles.pet_logo_intro}>
        <img src="/logo_sem_borda.svg" 
          alt="Logo do PET sem borda." 
        />
      </div>
    </section>
  );
}

function Pillars() {
  const navigate = useNavigate();

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
            <button onClick={() => navigate('/projetos')}>
              <span>Veja nossos projetos &gt;</span> 
            </button>                
          </article>
        ))}
      </div>
    </section>
  );
}

function HistorySection() {
  const [activeEraIndex, setActiveEraIndex] = useState(0);
  const activeEra = historyEras[activeEraIndex];
  const slides = activeEra?.photos?.length
    ? activeEra.photos
    : [{ src: "/placeholder.webp", alt: "Foto histórica do PET", caption: "Legenda da foto" }];
  const { currentSlide: activePhotoIndex, setCurrentSlide: setActivePhotoIndex, goToPrevious, goToNext } = useCarousel(slides, 4500);

  useEffect(() => {
    setActivePhotoIndex(0);
  }, [activeEraIndex, setActivePhotoIndex]);

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
          
          <div className={styles.historyPeriod}>
            <div className={`${styles.line} ${styles.short}`}></div>
            <span className={styles.year}>{activeEra.periodStart}</span>
            <div className={`${styles.line} ${styles.long}`}></div>
            <span className={styles.year}>{activeEra.periodEnd}</span>
          </div>
          
          <p>{activeEra.content}</p>
        </div>

        <div className={styles.historyCarouselMock}>
          <button type="button" aria-label="Foto anterior" onClick={goToPrevious}>
            <FaChevronLeft />
          </button>

          <div className={styles.photoMock}>
            <img src={slides[activePhotoIndex].src} alt={slides[activePhotoIndex].alt} className={styles.historyPhotoImage} />
          </div>

          <p className={styles.historyPhotoCaption}>{slides[activePhotoIndex].caption}</p>

          <button type="button" aria-label="Próxima foto" onClick={goToNext}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

function MembersSection() {
  const isMobile = useMobileView(720);
  const { currentSlide, setCurrentSlide } = useCarousel([], 0);
  const [showAll, setShowAll] = useState(false);
  const visibleMembers = showAll ? members : members.slice(0, 4);
  const maxSlide = Math.max(0, members.length - 3);
  const isAtStart = currentSlide === 0;
  const isAtEnd = currentSlide >= maxSlide;

  const goToPrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToNext = () => {
    if (currentSlide < maxSlide) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <section className={styles.membersSection}>
      <h3>Integrantes</h3>
      <p style={{ fontWeight: "bold" }}>
        Conheça os alunos que fazem o PET acontecer!
      </p>
      {isMobile ? (
        <>
          <div className={styles.membersMobileGrid}>
            {visibleMembers.map((member, index) => (
              <MemberCardFeatured
                key={`member-mobile-${index}`}
                photo={member.photo}
                maxFronts={2}
                {...member}
              />
            ))}
          </div>

          {members.length > 4 && (
            <button
              type="button"
              className={styles.membersShowMoreButton}
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "Ver menos" : "Ver mais"}
            </button>
          )}
        </>
      ) : (
        <>
          <div className={styles.membersCarousel}>
            <button
              type="button"
              className={`${styles.membersNavButton} ${styles.membersNavButtonLeft}`}
              onClick={goToPrevious}
              disabled={isAtStart}
              aria-label="Integrante anterior"
            >
              <FaChevronLeft />
            </button>

            <div className={styles.membersViewport}>
              <div
                className={styles.membersTrack}
                style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
              >
                {members.map((member, index) => (
                  <div key={`member-${index}`} className={styles.memberIndividual}>
                    <MemberCardFeatured
                      photo={member.photo}
                      maxFronts={2}
                      {...member}
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              className={`${styles.membersNavButton} ${styles.membersNavButtonRight}`}
              onClick={goToNext}
              disabled={isAtEnd}
              aria-label="Próximo integrante"
            >
              <FaChevronRight />
            </button>
          </div>

          <div className={styles.membersDots}>
            {members.map((_, index) => {
              if (index > maxSlide) return null;
              return (
                <button
                  key={`members-dot-${index}`}
                  type="button"
                  className={`${styles.memberDot} ${currentSlide === index ? styles.memberDotActive : ""}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Ir para membro ${index + 1}`}
                />
              );
            })}
          </div>
        </>
      )}
    </section>
  );
}

export default function SobreNos() {
  return (
    <div className={styles.pageWrapper}>
      <NavBar />
      <main className={styles.mainContent}>
        <PhotoSection />
        <WhatIsPet />
        <Pillars />
        <HistorySection />
        <MembersSection />
      </main>

      <FooterUSP />
    </div>
  );
}