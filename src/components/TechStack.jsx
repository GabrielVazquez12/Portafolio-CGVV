import './TechStack.css';

const TechStack = () => {
  const stack = [
    { name: "Python", icon: "devicon-python-plain" },
    { name: "Node.js", icon: "devicon-nodejs-plain" },
    { name: "Java", icon: "devicon-java-plain" },
    { name: "FastAPI", icon: "devicon-fastapi-original" },
    { name: "React", icon: "devicon-react-original" },
    { name: "HTML5", icon: "devicon-html5-plain" },
    { name: "CSS3", icon: "devicon-css3-plain" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain" }
  ];

  return (
    <section id="stack" className="stack-section">
      <h2 className="section-title">Tech Stack</h2>
      <div className="stack-grid">
        {stack.map((tech, index) => (
          <div key={index} className="stack-item">
            <i className={`${tech.icon} stack-icon`}></i>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;