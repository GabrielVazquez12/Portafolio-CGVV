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
            <div>
            <div className="eyebrow">SYSTEMS ENGINEERING STUDENT</div>
            <h1> Hello, I'm <span id="scramble-name" ref={nameRef}></span></h1>
            </div>
        </div>
        <p>
            I build software with the same obsession as completing a game map to 100%.{' '}
            <span className="role">Focused on Full Stack development and IoT integration.</span>
        </p>
        <div className="cta-row">
            <a href="#proyectos" className="btn">View Projects</a>
        </div>
        </section>
    );
    }