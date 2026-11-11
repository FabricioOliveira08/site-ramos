
import { useState } from "react";
import "./Header.css";

const navItems = [
  { label: "A proposta", href: "#proposta" },
  { label: "A trilha", href: "#trilha" },
  { label: "Laboratório", href: "#laboratorio" },
  { label: "Plano de ação", href: "#plano" },
  { label: "Para professores", href: "#professores" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__content">
        <a href="#inicio" className="header-brand">
          <span className="header-brand__mark">r.</span>

          <span className="header-brand__identity">
            <strong>ramos</strong>
            <small>Computação em comunidade</small>
          </span>
        </a>

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
      </div>
    </header>
  );
}

export default Header;
