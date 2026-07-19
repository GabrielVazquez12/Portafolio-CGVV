
import { useState, useEffect } from 'react';
const CustomCursor = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [linkHovered, setLinkHovered] = useState(false);

    useEffect(() => {
        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const onLinkHoverStart = () => setLinkHovered(true);
        const onLinkHoverEnd = () => setLinkHovered(false);

        window.addEventListener('mousemove', onMouseMove);

        const clickables = document.querySelectorAll('a, button, .btn');
        clickables.forEach(el => {
            el.addEventListener('mouseover', onLinkHoverStart);
            el.addEventListener('mouseout', onLinkHoverEnd);
        });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            clickables.forEach(el => {
                el.removeEventListener('mouseover', onLinkHoverStart);
                el.removeEventListener('mouseout', onLinkHoverEnd);
            });
        };
    }, []);

    // Tamaño base del láser (12px) y tamaño cuando pasas por un botón (24px)
    const currentSize = linkHovered ? 16 : 8;

    const cursorStyle = {
        // Restamos la mitad del tamaño actual para que el click siempre sea en el centro exacto
        transform: `translate3d(${position.x - (currentSize / 2)}px, ${position.y - (currentSize / 2)}px, 0)`,
        width: `${currentSize}px`,
        height: `${currentSize}px`,
        // La transición ahora SOLO aplica al tamaño, el movimiento es instantáneo
        transition: 'width 0.15s ease-out, height 0.15s ease-out',
    };

    return (
        <>
            <div className="cursor-laser" style={cursorStyle} />
        </>
    );
};

const styles = `
  .cursor-laser {
    position: fixed;
    top: 0;
    left: 0;
    background-color: #ff0000; /* Rojo puro para el núcleo */
    border-radius: 50%;
    pointer-events: none; 
    z-index: 9999;
    /* Múltiples sombras para crear el efecto de luz láser rebotando */
    box-shadow: 0 0 8px 2px rgba(255, 0, 0, 0.9), 
                0 0 15px 5px rgba(255, 59, 59, 0.6),
                0 0 30px 10px rgba(255, 59, 59, 0.3);
  }
`;

const InjectStyles = () => <style>{styles}</style>;

export default function CustomCursorWithStyles() {
    return (
        <>
            <InjectStyles />
            <CustomCursor />
        </>
    );
}