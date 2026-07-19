import { useEffect, useRef } from 'react';

export default function HeroSection() {
    const nameRef = useRef(null);

    useEffect(() => {
        const target = 'Carlos.'
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ01#$%';
        let frame = 0;
        const totalFrames = 28;
        let animationId;

        const scrambleTick = () => {
        let out = '';
        for (let i = 0; i < target.length; i++) {
            const reveal = frame - i * 1.5;
            if (reveal > totalFrames * 0.6) out += target[i];
            else out += chars[Math.floor(Math.random() * chars.length)];
        }
        
        if (nameRef.current) nameRef.current.textContent = out;
        frame++;
        
        if (frame < totalFrames + target.length) {
            // Usamos setTimeout junto con requestAnimationFrame para controlar la velocidad
            animationId = setTimeout(() => requestAnimationFrame(scrambleTick), 40);
        } else {
            if (nameRef.current) nameRef.current.textContent = target;
        }
        };

        scrambleTick();

        // Limpiamos la animación si el componente desaparece
        return () => clearTimeout(animationId);
    }, []);

    return (
        <section className="hero">
        <div className="hero-top">
            <div className="avatar" id="avatar-placeholder">
            <i className="fa-solid fa-user"></i>
            </div>
            <div>
            <div className="eyebrow">ESTUDIANTE DE INGENIERÍA EN SISTEMAS</div>
            <h1>Hola, soy <span id="scramble-name" ref={nameRef}></span></h1>
            </div>
        </div>
        <p>
            Construyo software con la misma obsesión con la que se completa un mapa al 100%.{' '}
            <span className="role">Enfocado en desarrollo Full Stack e integración IoT.</span>
        </p>
        <div className="cta-row">
            <a href="#proyectos" className="btn">ver proyectos</a>
            <a href="#terminal" className="btn">abrir terminal</a>
        </div>
        </section>
    );
    }