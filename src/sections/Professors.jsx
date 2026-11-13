import SectionTitle from "../components/ui/SectionTitle";
import { professorRequests } from "../data/content";

import "./Professors.css";

function Professors() {
  return (
    <section
      id="professores"
      className="wrap section professors"
    >
      <div className="professor">

        <div className="professor-intro">
          <SectionTitle
            label="06 / CONVITE À CONSTRUÇÃO"
            description="Apresentamos uma proposta de piloto e um plano inicial de atividades. Buscamos uma leitura crítica que ajude a transformar a iniciativa em uma experiência de aprendizagem consistente."
          >
            Uma primeira conversa 
            <br />
            com os{" "}
            <span className="professors-highlight">
              professores.
            </span>
          </SectionTitle>
        </div>

        <div className="asks">
          {professorRequests.map((request) => (
            <article key={request.number}>
              <span className="ask-number">
                {request.number}
              </span>

              <div>
                <h3>{request.title}</h3>
                <p>{request.description}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Professors;