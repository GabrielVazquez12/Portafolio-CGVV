import './Projects.css'; 

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "Clockmant",
      description: "Mobile operator check-in application with an associated human resources web dashboard. Built for the HackaTec InnovaTecNM 2026 competition in the Intelligent Software category.",
      tech: ["Flutter", "Node.js", "Python"],
      image: "/Clockmant.png",
      repoLink: "https://github.com/GabrielVazquez12/clockmant.git",
      demoLink: "#"
    },
    {
      id: 2,
      title: "Academic Portal",
      description: "Comprehensive full-stack platform tailored for academic management, integrating secure databases and a clean user interface for administration.",
      tech: ["React", "Node.js", "Express", "MySQL"],
      image: "/Academica.png",
      repoLink: "https://github.com/GabrielVazquez12/academic-portal-fullstack.git",
      demoLink: "#"
    },
    {
      id: 3,
      title: "Computer Architecture Web",
      description: "Educational web project detailing computer architecture concepts. Built entirely from scratch using pure vanilla web technologies to demonstrate core DOM manipulation and styling.",
      tech: ["HTML5", "CSS3", "Vanilla JS"],
      image: "/Arquitectura.png",
      repoLink: "https://github.com/GabrielVazquez12/GabrielVazquez12.github.io.git",
      demoLink: "https://gabrielvazquez12.github.io" 
    },
    {
      id: 4,
      title: "AI Diet Analysis",
      description: "MVP developed for a hackathon's Smart Software category. Integrates a robust backend with the Google Gemini API to evaluate food items via advanced image processing.",
      tech: ["React", "Node.js", "Express", "Gemini API"],
      image: "/Dieta.png",
      repoLink: "https://github.com/orfecalli/analisis-dieta.git",
      demoLink: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">MY PROJECTS</h2>
      <div className="projects-grid">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={`${project.title} screenshot`} />
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
                {project.repoLink !== "#" && (
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn-outline">
                    View Code
                  </a>
                )}
                {project.demoLink !== "#" && (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;