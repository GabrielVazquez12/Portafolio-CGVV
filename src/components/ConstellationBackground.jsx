import { useEffect, useRef } from 'react';

export default function ConstellationBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let mouse = { x: -9999, y: -9999 };
        let dots = []; // Lo sacamos aquí para poder actualizarlo

        // Encapsulamos la creación de puntos para poder llamarla cuando queramos
        const initDots = () => {
            const count = Math.min(90, Math.floor(window.innerWidth / 14));
            dots = Array.from({ length: count }, () => ({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3
            }));
        };
        
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initDots(); 
        };
        
        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        
        handleResize();

        const drawConstellation = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            dots.forEach(d => {
                d.x += d.vx; d.y += d.vy;
                if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
                if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
            });

            for (let i = 0; i < dots.length; i++) {
                for (let j = i + 1; j < dots.length; j++) {
                    const dx = dots[i].x - dots[j].x;
                    const dy = dots[i].y - dots[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                
                    if (dist < 130) {
                        ctx.strokeStyle = `rgba(255, 59, 59, ${(1 - dist / 130) * 0.25})`;
                        ctx.beginPath(); ctx.moveTo(dots[i].x, dots[i].y); ctx.lineTo(dots[j].x, dots[j].y); ctx.stroke();
                    }
                }
                
                const dm = Math.sqrt((dots[i].x - mouse.x) ** 2 + (dots[i].y - mouse.y) ** 2);
                if (dm < 150) {
                    ctx.strokeStyle = `rgba(255, 59, 59, ${(1 - dm / 150) * 0.5})`;
                    ctx.beginPath(); ctx.moveTo(dots[i].x, dots[i].y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
                }
            }

            dots.forEach(d => {
                ctx.fillStyle = 'rgba(255, 59, 59, 0.85)';
                ctx.beginPath(); ctx.arc(d.x, d.y, 1.8, 0, 7); ctx.fill();
            });

            animationFrameId = requestAnimationFrame(drawConstellation);
        };

        drawConstellation();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            id="constellation" 
            style={{ 
                position: 'fixed', 
                inset: 0, 
                zIndex: 0, 
                pointerEvents: 'none', 
                display: 'block' 
            }} 
        />
    );
}