import { Fragment, useEffect, useState } from "react";
import { FaBookOpen, FaChevronLeft, FaChevronRight, FaGraduationCap } from "react-icons/fa";
import { MdOutlineScience } from "react-icons/md";

import NavBar from "../../components/NavBar/NavBar";
import FooterUSP from "../../components/FooterUSP/FooterUSP";
import MemberCardFeatured from "../../components/MemberCardFeatured/MemberCardNew";
import pet_coisa from "../../assets/PaginaInicial/pet_coisa.png";
import styles from "./SobreNos.module.css";
import mocks from "./sobreNos.mocks.json";
import { useNavigate } from "react-router-dom";

//Faz atribuição de valores do mock para as constantes, por nome 
const {
  stats,
  pillars,
  historyEras,
  members,
  photoSlides,
} = mocks;

//Para referenciar partes desse objeto devemos fazer pillarIcons.{nome_campo}
const pillarIcons = {
  graduation: <FaGraduationCap />,
  book: <FaBookOpen />,
  science: <MdOutlineScience />,
};

const getWrappedIndex = (current, total, step) => (current + step + total) % total;

function PhotoSection() {
  const totalSlides = photoSlides.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  //Temporização de 4500ms para passagem automática de imagem (se houver apenas uma, ele não faz nada)
  useEffect(() => {
    if (totalSlides <= 1) return undefined;

    const interval = setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % totalSlides);
    }, 4500);

    return () => clearInterval(interval);
  }, [totalSlides]);

  //Funções para passagem de imagem, chamadas sempre que os botões forem acionados
  const goToPreviousSlide = () => {
    setCurrentSlide((previous) => getWrappedIndex(previous, totalSlides, -1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((previous) => getWrappedIndex(previous, totalSlides, 1));
  };

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

      <div className={styles.pet_logo_intro}>
        <img src={pet_coisa} 
          alt="Uma núvem roxa atuando como plano de fundo para o logo do PET." 
        />
      </div>
    </section>
  );
}

//Precisa navegar projeto por filtro de categoria >> Implementar isso quando a página de projetos estiver pronta
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
  const mobileBreakpoint = 720;
  const [activeEraIndex, setActiveEraIndex] = useState(0);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [isMobileHistoryView, setIsMobileHistoryView] = useState(
    () => typeof window !== "undefined" && window.innerWidth <= mobileBreakpoint
  );
  const slides = historyEras[activeEraIndex]?.photos?.length
    ? historyEras[activeEraIndex].photos
    : [{ src: "/placeholder.webp", alt: "Foto histórica do PET", caption: "Legenda da foto" }];
  const totalPhotos = slides.length;
  const activeEra = historyEras[activeEraIndex];
  const activePhoto = slides[activePhotoIndex];

  useEffect(() => {
    setActivePhotoIndex(0);
  }, [activeEraIndex]);

  useEffect(() => {
    const updateHistoryView = () => {
      setIsMobileHistoryView(window.innerWidth <= mobileBreakpoint);
    };

    updateHistoryView();
    window.addEventListener("resize", updateHistoryView);

    return () => window.removeEventListener("resize", updateHistoryView);
  }, [mobileBreakpoint]);

  useEffect(() => {
    if (!isMobileHistoryView || totalPhotos <= 1) return undefined;

    const interval = setInterval(() => {
      setActivePhotoIndex((previous) => getWrappedIndex(previous, totalPhotos, 1));
    }, 4500);

    return () => clearInterval(interval);
  }, [isMobileHistoryView, totalPhotos]);

  const goToPreviousPhoto = () => {
    setActivePhotoIndex((previous) => getWrappedIndex(previous, totalPhotos, -1));
  };

  const goToNextPhoto = () => {
    setActivePhotoIndex((previous) => getWrappedIndex(previous, totalPhotos, 1));
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
          
          <div className={styles.historyPeriod}>
            <div className={`${styles.line} ${styles.short}`}></div>
            <span className={styles.year}>{activeEra.periodStart}</span>
            <div className={`${styles.line} ${styles.long}`}></div>
            <span className={styles.year}>{activeEra.periodEnd}</span>
          </div>
          
          <p>{activeEra.content}</p>
        </div>

        <div className={styles.historyCarouselMock}>
          <button type="button" aria-label="Foto anterior" onClick={goToPreviousPhoto}>
            <FaChevronLeft />
          </button>

          <div className={styles.photoMock}>
            <img src={activePhoto.src} alt={activePhoto.alt} className={styles.historyPhotoImage} />
          </div>

          <p className={styles.historyPhotoCaption}>{activePhoto.caption}</p>

          <button type="button" aria-label="Próxima foto" onClick={goToNextPhoto}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

function MembersSection() {
  const membersPerSlide = 3;
  const initialMobileMembers = 4;
  const maxFrontsPerCard = 2;
  const mobileBreakpoint = 720;
  const memberSlides = Array.from(
    { length: Math.ceil(members.length / membersPerSlide) },
    (_, index) => members.slice(index * membersPerSlide, index * membersPerSlide + membersPerSlide)
  );

  const totalSlides = memberSlides.length || 1;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAllMobileMembers, setShowAllMobileMembers] = useState(false);
  const [isMobileMembersView, setIsMobileMembersView] = useState(
    () => typeof window !== "undefined" && window.innerWidth <= mobileBreakpoint
  );

  useEffect(() => {
    const updateMembersView = () => {
      const isMobile = window.innerWidth <= mobileBreakpoint;
      setIsMobileMembersView(isMobile);

      if (!isMobile) {
        setShowAllMobileMembers(false);
      }
    };

    updateMembersView();
    window.addEventListener("resize", updateMembersView);

    return () => window.removeEventListener("resize", updateMembersView);
  }, [mobileBreakpoint]);

  useEffect(() => {
    if (isMobileMembersView || totalSlides <= 1) return undefined;

    const interval = setInterval(() => {
      setCurrentSlide((previous) => getWrappedIndex(previous, totalSlides, 1));
    }, 7500);

    return () => clearInterval(interval);
  }, [isMobileMembersView, totalSlides, 7500]);

  const goToPreviousSlide = () => {
    setCurrentSlide((previous) => getWrappedIndex(previous, totalSlides, -1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((previous) => getWrappedIndex(previous, totalSlides, 1));
  };

  const visibleMobileMembers = showAllMobileMembers ? members : members.slice(0, initialMobileMembers);
  const shouldShowMoreButton = members.length > initialMobileMembers;
  
  const renderMemberCard = (member, key) => (
    <MemberCardFeatured
      photo={member.photo}
      maxFronts={maxFrontsPerCard}
      key={key}
      {...member}
    />
  );

  return (
    <section className={styles.membersSection}>
      <h3>Integrantes</h3>
      <p style={{ fontWeight: "bold" }}>
        Conheça os alunos que fazem o PET acontecer!
      </p>
      {isMobileMembersView ? (
        <>
          <div className={styles.membersMobileGrid}>
            {visibleMobileMembers.map((member, index) => (
              renderMemberCard(member, `member-mobile-${index}`)
            ))}
          </div>

          {shouldShowMoreButton && (
            <button
              type="button"
              className={styles.membersShowMoreButton}
              onClick={() => setShowAllMobileMembers((previous) => !previous)}
            >
              {showAllMobileMembers ? "Ver menos" : "Ver mais"}
            </button>
          )}
        </>
      ) : (
        <>
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
                      renderMemberCard(member, `member-${groupIndex * membersPerSlide + memberIndex}`)
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