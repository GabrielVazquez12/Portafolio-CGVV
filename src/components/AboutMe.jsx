const AboutMe = () => {
    return (
        <section id="about" className="about-section">
            <h2 className="section-title">About Me</h2>
            
            <div className="about-grid">
                {/* Contenedor de la Foto */}
                <div className="about-image-wrapper">
                    <img src="/foto-perfil.jpeg" alt="Carlos Gabriel Vázquez Vélez" className="profile-img" />
                    <div className="image-frame"></div>
                </div>

                {/* Contenedor del Texto y Botones */}
                <div className="about-content">
                    <div className="terminal-header">
                        <span className="prompt">$USER = developer</span>
                        <span className="separator">|</span>
                        <span className="prompt">OS = Continuous_Learning</span>
                    </div>
                    
                    <p>
                        I am a Systems Engineering student at Tecnológico Nacional de México, heavily focused on Full Stack development, virtualization, and scalable infrastructure. I build robust solutions by combining Python, Go, and Node.js on the backend with React and Flutter on the frontend, supported by containerization tools like Docker and databases like MySQL and PostgreSQL.
                    </p>
                    <p>
                        Beyond the IDE, I'm passionate about customizing my Linux desktop environments, exploring the lore of video games, and continuously optimizing my workflow. I am currently looking for an internship or residency where I can contribute to high-impact projects.
                    </p>

                    <div className="about-actions">
                        <a href="/CV_Carlos_Gabriel_Vazquez_Velez.pdf" target="_blank" className="btn btn-transparent">
                            <i className="fa-solid fa-file-pdf"></i> My CV.PDF
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;