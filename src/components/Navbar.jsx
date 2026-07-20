export default function Navbar() {
    return(
    <nav>
        <div className="logo">
            CARLOS<span style={{color: 'var(--text-dim)'}}>.dev</span>
        </div>
        <div>
            <a href="#about">about me</a>
            <a href="#proyectos">projects</a>
            <a href="#stack">stack</a>
        </div>
    </nav>
    );
}