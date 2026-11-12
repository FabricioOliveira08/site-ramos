
import Button from "../components/ui/Button";
import FirstCycle from "./FirstCycle";

import "./Hero.css";

function Hero() {
  return (
   <section id="inicio" className="hero wrap">
      <div className="hero__content">
        <p className="hero__eyebrow">
          INICIATIVA ESTUDANTIL INDEPENDENTE · CAMPUS IV
        </p>

        <h1 className="hero__title">
          Conhecimento
          <br />
          cria <em>raízes.</em>
          <br />
          Projetos abrem
          <br />
          caminhos.
        </h1>

        <p className="hero__description">
          Uma comunidade para aprender lógica,
          construir em conjunto e transformar
          ideias em experiências reais de computação.
        </p>

        <div className="hero__actions">
          <Button href="#trilha" variant="primary">
            Conhecer a trilha piloto
          </Button>

          <Button href="#proposta" variant="text">
            Conhecer a proposta
          </Button>
        </div>

        <p className="hero__disclaimer">
          Ramos é um nome provisório. Proposta em
          construção, sem vínculo institucional formalizado.
        </p>
      </div>

      <FirstCycle />
    </section>
  );
}

export default Hero;
