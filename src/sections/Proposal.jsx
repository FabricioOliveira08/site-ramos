import SectionTitle from "../components/ui/SectionTitle";
import { proposalPillars } from "../data/content";

import "./Proposal.css";

function Proposal() {
  return (
    <section id="proposta" className="proposal">
      <SectionTitle
        label="01 / A PROPOSTA"
        description="O ponto de partida das reuniões é simples: criar oportunidades de aprendizagem e colaboração a partir do que o próprio grupo consegue realizar."
      >
        Um núcleo pequeno.
        <br />
        Uma entrega concreta.
      </SectionTitle>

      <div className="three">
        {proposalPillars.map((pillar) => (
          <article className="plain-card" key={pillar.number}>
            <span className="index">
              {pillar.number}
            </span>

            <h3>{pillar.title}</h3>

            <p>{pillar.description}</p>
          </article>
        ))}
      </div>

      <div className="note">
        <strong>
          Nosso primeiro público, como proposta:
        </strong>{" "}
        estudantes do Campus IV iniciantes em programação e ingressantes de LCC e SI.
      </div>
    </section>
  );
}

export default Proposal;
