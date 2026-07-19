import './Projects.css'; 

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "Análisis de Dieta con IA",
      description: "MVP desarrollado para competir en la categoría Smart Software de un hackathon. Integra un backend robusto con la API de Google Gemini para evaluar alimentos mediante procesamiento de imágenes.",
      tech: ["React", "Node.js", "Express", "Gemini API"],
      image: "https://via.placeholder.com/600x400/1a1a2e/ff2a2a?text=Dieta+IA",
      repoLink: "https://github.com/tu-usuario/dieta-ia",
      demoLink: "#"
    }
  ];

  return (
    <section id="proyectos" className="projects-section">
      <h2 className="section-title">Mis Proyectos</h2>
      <div className="projects-grid">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={`Captura de ${project.title}`} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="tech-tags">
                {project.tech.map((tag, index) => (
                  <span key={index} className="tech-tag">{tag}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  Ver Código
                </a>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;