import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const CustomCursor: React.FC = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  
  const [cursorText, setCursorText] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isViewMode, setIsViewMode] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, input, [role="button"], .interactive-hover');
      const viewTarget = target.closest('[data-cursor="view"]');

      if (viewTarget) {
        setIsViewMode(true);
        setIsHovered(true);
        setCursorText(isRTL ? 'عرض' : 'VIEW');
      } else if (interactive) {
        setIsHovered(true);
        setIsViewMode(false);
        setCursorText('');
      } else {
        setIsHovered(false);
        setIsViewMode(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const render = () => {
      // Smooth lerp for ring follower
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animFrame = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    animFrame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animFrame);
    };
  }, [isRTL]);

  if (!isVisible) return null;

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${isHovered ? 'hover-active' : ''} ${
          isViewMode ? 'hover-view' : ''
        }`}
      >
        {cursorText}
      </div>
    </>
  );
};
