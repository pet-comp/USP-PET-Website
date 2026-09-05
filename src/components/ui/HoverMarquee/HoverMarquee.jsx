import { useEffect } from "react";
import styles from "./HoverMarquee.module.css";

export default function HoverMarquee({ triggerRef, targetRef, children, duration = "2s" }) {
  useEffect(() => {
    const triggerEl = triggerRef?.current;
    const targetEl = targetRef?.current;

    if (!triggerEl || !targetEl) return;

    const handleMouseEnter = () => {
      const larguraTotal = targetEl.scrollWidth;                            // Tamanho real de todo o conteúdo somado
      const larguraVisivel = targetEl.parentElement?.clientWidth || 0;      // Tamanho da "moldura" que corta o texto
      const sobraOculta = larguraTotal - larguraVisivel;                    // Quantidade de pixels escondidos para fora da tela

      // Só ativa o movimento se o texto for maior que o espaço disponível
      if (sobraOculta > 0) {
        targetEl.style.transition = `transform ${duration} cubic-bezier(0.25, 1, 0.5, 1)`;
        targetEl.style.transform = `translateX(-${sobraOculta}px)`;
      }
    };

    const handleMouseLeave = () => {
      // Devolve o conteúdo para o início ao tirar o mouse
      targetEl.style.transition = "transform 0.3s ease-out";
      targetEl.style.transform = "translateX(0px)";
    };

    // Vincula os eventos de mouse ao elemento gatilho (trigger)
    triggerEl.addEventListener("mouseenter", handleMouseEnter);
    triggerEl.addEventListener("mouseleave", handleMouseLeave);

    // Remove os listeners da memória ao desmontar o componente
    return () => {
      triggerEl.removeEventListener("mouseenter", handleMouseEnter);
      triggerEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [triggerRef, targetRef, duration]);

  return (
    <div ref={targetRef} className={styles.marqueeContent}>
      {children}
    </div>
  );
}
