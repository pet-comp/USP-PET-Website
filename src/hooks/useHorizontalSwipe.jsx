import { useRef } from "react";

export default function useHorizontalSwipe({
    onSwipeLeft,
    onSwipeRight,
    minSwipeDistance = 50,
}) {

    const startX = useRef(0);
    const currentX = useRef(0);
    const isDragging = useRef(false);

    // TOUCH

    const handleTouchStart = (event) => {
        startX.current = event.touches[0].clientX;
    };

    const handleTouchMove = (event) => {
        currentX.current = event.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const distance = currentX.current - startX.current;

        handleSwipe(distance);
    };

    // MOUSE

    const handleMouseDown = (event) => {
        isDragging.current = true;

        startX.current = event.clientX;
        currentX.current = event.clientX;
    };

    const handleMouseMove = (event) => {
        if (!isDragging.current) return;

        currentX.current = event.clientX;
    };

    const handleMouseUp = () => {
        if (!isDragging.current) return;

        const distance = currentX.current - startX.current;

        handleSwipe(distance);

        isDragging.current = false;
    };

    // SWIPE

    const handleSwipe = (distance) => {

        if (distance > minSwipeDistance) {
            onSwipeRight?.();
        }

        else if (distance < -minSwipeDistance) {
            onSwipeLeft?.();
        }
    };

    return {
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,

        onMouseDown: handleMouseDown,
        onMouseMove: handleMouseMove,
        onMouseUp: handleMouseUp,
        onMouseLeave: handleMouseUp,
    };
}