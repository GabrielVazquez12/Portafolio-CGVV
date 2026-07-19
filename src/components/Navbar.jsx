export default function Navbar() {
    return(
    <nav>
        <div className="logo">
            CARLOS<span style={{color: 'var(--text-dim)'}}>.dev</span>
        </div>
        <div>
            <a href="#proyectos">proyectos</a>
            <a href="#stack">stack</a>
            <a href="#terminal">terminal</a>
            <a href="#contacto">contacto</a>
        </div>
    </nav>
    );
}