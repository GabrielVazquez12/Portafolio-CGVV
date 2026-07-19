import { useState, useEffect } from 'react';

const GithubDashboard = () => {
    // Aquí guardaremos los datos que nos devuelva GitHub
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // OJO: Aquí pon tu nombre de usuario real de GitHub
        const githubUsername = 'GabrielVazquez12'; 

        // Hacemos la petición a la API pública
        fetch(`https://api.github.com/users/${githubUsername}`)
            .then(res => res.json())
            .then(data => {
                setProfile(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error al conectar con GitHub:", error);
                setLoading(false);
            });
    }, []);

    // Mientras los datos viajan por internet, mostramos esto:
    if (loading) {
        return (
            <section className="dashboard-section">
                <h2 className="section-title">System Status</h2>
                <div className="terminal-loader">Estableciendo conexión con GitHub...</div>
            </section>
        );
    }

    // Una vez que llegan los datos, pintamos el panel
    return (
        <section id="dashboard" className="dashboard-section">
            <h2 className="section-title">Live Telemetry</h2>
            
            <div className="dashboard-grid">
                {/* Tarjeta 1: Repositorios Públicos */}
                <div className="dash-card">
                    <i className="fa-solid fa-code-branch icon-red"></i>
                    <div className="dash-info">
                        <h3>Repos Públicos</h3>
                        <p className="big-number">{profile.public_repos}</p>
                    </div>
                </div>

                {/* Tarjeta 2: Seguidores */}
                <div className="dash-card">
                    <i className="fa-solid fa-users icon-red"></i>
                    <div className="dash-info">
                        <h3>Seguidores</h3>
                        <p className="big-number">{profile.followers}</p>
                    </div>
                </div>

                {/* Tarjeta 3: Estado de la cuenta */}
                <div className="dash-card status-card">
                    <div className="status-dot blink"></div>
                    <div className="dash-info">
                        <h3>API Status</h3>
                        <p className="status-text">Operational</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GithubDashboard;