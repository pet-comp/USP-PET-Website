import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import useHorizontalSwipe from "../../../hooks/useHorizontalSwipe"

import styles from "./Carousel.module.css";


export default function Carousel({ 
        className="hero",
        items = [], 
        autoplay = true,
        autoplayInterval = 4500,
        showDots = true,
        showArrows = false,
        showCaption = false,
    }) {
        const [currentSlide, setCurrentSlide] = useState(0);

        useEffect(() => {
            if (!autoplay) return;        
            if (items.length <= 1) return;

            const interval = setInterval(() => {
                setCurrentSlide((prev) => 
                    (prev + 1) % items.length
                );
            }, autoplayInterval);

            return () => clearInterval(interval);

        }, [items.length, autoplay, autoplayInterval, currentSlide]);

        const goToPrevious = () => {
            setCurrentSlide((prev) =>
                prev === 0 ? items.length - 1 : prev - 1
            );
        };

        const goToNext = () => {
            setCurrentSlide((prev) =>
                (prev + 1) % items.length
            );
        };

        const swipeHandlers = useHorizontalSwipe({
            onSwipeLeft: goToNext,
            onSwipeRight: goToPrevious,
        });

        const currentItem = items[currentSlide];
        if (!items.length) return null;

    return (
        <div className={`${styles.carousel} ${className}`}>

            <div 
                className={`imageWrapper ${styles.imageWrapper}`}
                // Eventos do Swipe
                onTouchStart={swipeHandlers.onTouchStart}
                onTouchMove={swipeHandlers.onTouchMove}
                onTouchEnd={swipeHandlers.onTouchEnd}

                onMouseDown={swipeHandlers.onMouseDown}
                onMouseMove={swipeHandlers.onMouseMove}
                onMouseUp={swipeHandlers.onMouseUp}
                onMouseLeave={swipeHandlers.onMouseLeave}
            >

                <img
                    src={currentItem.src}
                    alt={currentItem.alt}
                    className={`image ${styles.image}`}
                />

                {showArrows && (
                    <>
                        <button
                            type="button"
                            className={`arrow left${styles.arrow} ${styles.left}`}
                            onClick={goToPrevious}
                            aria-label="Imagem anterior"
                        >
                            <FaChevronLeft />
                        </button>

                        <button
                            type="button"
                            className={`arrow right ${styles.arrow} ${styles.right}`}
                            onClick={goToNext}
                            aria-label="Próxima imagem"
                        >
                            <FaChevronRight />
                        </button>
                    </>
                )}

            </div>

            {showCaption && currentItem.caption && (
                <p className={`caption ${styles.caption}`}>
                    {currentItem.caption}
                </p>
            )}

            {showDots && (
                <div className={`dots ${styles.dots}`}>

                    {items.map((item, index) => (
                        <button
                            key={`${item.src}-${index}`}
                            type="button"
                            className={`dot ${styles.dot} ${index === currentSlide ? "activeDot" : ""}`}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Ir para imagem ${index + 1}`}
                        />
                    ))}

                </div>
            )}

        </div>
    );
}