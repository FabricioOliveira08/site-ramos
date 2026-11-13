import SectionTitle from "../components/ui/SectionTitle";
import { horizonsIdeas } from "../data/content";

import "./Horizons.css";

function Horizons() {
  return (
    <section
      id="horizontes"
      className="soft section horizons"
    >
      <div className="wrap">

        <SectionTitle
          label="05 / HORIZONTES"
          description="O potencial está na conexão entre ensino, projetos e comunidade. A expansão depende do que o primeiro ciclo demonstrar."
        >
          Guardar as ideias.
          <br />
          Escolher a hora certa.
        </SectionTitle>

        <div className="ideas">
          {horizonsIdeas.map((idea) => (
            <article key={idea.id}>
              <span className="pill">
                {idea.phase}
              </span>

              <h3>{idea.title}</h3>

              <p>{idea.description}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Horizons;
