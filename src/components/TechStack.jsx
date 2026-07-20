import './TechStack.css';
const TechStack = () => {
    // Organizar las tecnologías en un arreglo hace que el código sea mucho más limpio
    const technologies = [
        {
            category: "Backend & APIs",
            items: [
                { name: "Python", icon: "devicon-python-plain", color: "#3776AB" },
                { name: "Node.js", icon: "devicon-nodejs-plain", color: "#339933" },
                { name: "Go", icon: "devicon-go-original-wordmark", color: "#00ADD8" },
                { name: "FastAPI", icon: "devicon-fastapi-plain", color: "#009688" }
            ]
        },
        {
            category: "Frontend & Mobile",
            items: [
                { name: "React", icon: "devicon-react-original", color: "#61DAFB" },
                { name: "Flutter", icon: "devicon-flutter-plain", color: "#02569B" },
                { name: "JavaScript", icon: "devicon-javascript-plain", color: "#F7DF1E" },
                { name: "Bootstrap", icon: "devicon-bootstrap-plain", color: "#7952B3" }
            ]
        },
        {
            category: "Databases & Infra",
            items: [
                { name: "MySQL", icon: "devicon-mysql-plain", color: "#4479A1" },
                { name: "PostgreSQL", icon: "devicon-postgresql-plain", color: "#336791" },
                { name: "Docker", icon: "devicon-docker-plain", color: "#2496ED" },
                { name: "AWS", icon: "devicon-amazonwebservices-original", color: "#FF9900" }
            ]
        },
        {
            category: "Environment & Tools",
            items: [
                { name: "Git", icon: "devicon-git-plain", color: "#F05032" },
                { name: "VS Code", icon: "devicon-vscode-plain", color: "#007ACC" },
                { name: "Fedora", icon: "devicon-fedora-plain", color: "#51A2DA" },
                { name: "Hyprland", icon: "fa-solid fa-window-restore", color: "#00FF99" } /* Usamos FontAwesome para el Tiling WM */
            ]
        }
    ];

    return (
        <section id="stack" className="stack-section">
            <h2 className="section-title">System Architecture [Tech_Stack]</h2>
            
            <div className="stack-grid">
                {technologies.map((tech, index) => (
                    <div key={index} className="stack-category">
                        <div className="category-header">
                            <span className="folder-icon"><i className="fa-regular fa-folder-open"></i></span>
                            <h3>{tech.category}</h3>
                        </div>
                        
                        <div className="skills-container">
                            {tech.items.map((item, idx) => (
                                <div key={idx} className="skill-badge" style={{ '--hover-color': item.color }}>
                                    <i className={`${item.icon} skill-icon`}></i>
                                    <span className="skill-name">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;