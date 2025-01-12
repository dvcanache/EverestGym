import React, { useState, useEffect, useRef } from "react";

interface AnimatedElementProps {
  children: React.ReactNode;
  animationClass: string; // La clase de animación de Tailwind
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animationClass,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1, // El porcentaje del elemento visible necesario para activar la animación
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${isVisible ? animationClass : "opacity-0"}`} // Aplica la clase de animación cuando es visible
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
