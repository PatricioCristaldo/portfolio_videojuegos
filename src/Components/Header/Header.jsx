import './Header.css'

const Header = () => {
  return (
    <header className="header">
      {/* Agrupamos todo el 'Brand' */}
      <div className="header-brand">
        <h2 className="header-name">Patricio Cristaldo</h2>
      </div>
        <h1 className="header-title">Game Developer</h1>

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
