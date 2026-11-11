
import { useState } from "react";
import "./Header.css";

const navItems = [
  { label: "A proposta", href: "#proposta" },
  { label: "A trilha", href: "#trilha" },
  { label: "Laboratório", href: "#laboratorio" },
  { label: "Plano de ação", href: "#plano" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__content">

        {/* Identidade visual */}
        <a href="#inicio" className="header-brand">
          <span className="header-brand__mark">r.</span>

          <strong className="header-brand__name">
            ramos
          </strong>

          <span className="header-brand__tagline">
            COMPUTAÇÃO
            <br />
            EM
            <br />
            COMUNIDADE
          </span>
        </a>

        {/* Menu mobile */}
        <button
          type="button"
          className="header-menu-button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="header-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span aria-hidden="true">
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>

        {/* Navegação principal */}
        <nav
          id="header-navigation"
          className={`header-nav ${menuOpen ? "header-nav--open" : ""}`}
          aria-label="Navegação principal"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Botão para professores */}
        <a
          href="#professores"
          className={`header-cta ${menuOpen ? "header-cta--open" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          Para professores
        </a>

      </div>
    </header>
  );
}

export default Header;
