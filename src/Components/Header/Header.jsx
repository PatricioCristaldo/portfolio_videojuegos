import './Header.css'

const Header = () => {
  return (
    <header className="header">
      {/* Logo o nombre personal */}
      <div className="header-logo">
        <h2>Patricio Cristaldo</h2>
      </div>
        <h1>Game Developer</h1>

      {/* Menú de navegación */}
      <nav className="header-nav">
        <ul>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#contact">Contacto</a></li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
